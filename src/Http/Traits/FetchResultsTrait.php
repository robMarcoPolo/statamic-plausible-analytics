<?php

namespace Jackabox\Plausible\Http\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

trait FetchResultsTrait
{
    public string $key = '';
    public string $period = '';
    public ?string $lastError = null;
    public ?int $lastStatusCode = null;

    /**
     * Build the API v2 query URL
     */
    public function getApiUrl(): string
    {
        return config('plausible.domain') . '/api/v2/query';
    }

    /**
     * Execute a POST query against the Plausible API v2
     */
    public function executeQuery(array $queryBody): mixed
    {
        $queryBody['site_id'] = config('plausible.site');
        $url = $this->getApiUrl();

        try {
            $response = Http::withToken(config('plausible.key'))
                ->post($url, $queryBody);

            $statusCode = $response->status();
            $responseBody = $response->json();

            if (! $response->ok()) {
                $errorMessage = $responseBody['error'] ?? $response->body();

                $this->lastError = $errorMessage;
                $this->lastStatusCode = $statusCode;

                return null;
            }

            return $responseBody['results'] ?? $responseBody;

        } catch (\Exception $e) {
            $this->lastError = $e->getMessage();

            return null;
        }
    }

    /**
     * Convert period string to API v2 date_range format
     */
    public function convertPeriodToDateRange(string $period): string|array
    {
        return match($period) {
            'day' => 'day',
            'yesterday' => [
                Carbon::yesterday()->format('Y-m-d'),
                Carbon::yesterday()->format('Y-m-d')
            ],
            '7d' => '7d',
            '30d' => '30d',
            '6m', '6mo' => '6mo',
            '12m', '12mo' => '12mo',
            default => $period
        };
    }

    /**
     * Cache results for the configured duration
     */
    public function cacheResults(mixed $results): void
    {
        Cache::put($this->key, $results, config('plausible.cache_duration'));
    }

    /**
     * Get cached results or fetch fresh data
     */
    public function getCachedResults(): mixed
    {
        $cached = Cache::get($this->key);

        if ($cached !== null) {
            return $cached;
        }

        return $this->handleResults();
    }
}
