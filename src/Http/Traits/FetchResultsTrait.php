<?php

namespace Jackabox\Plausible\Http\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

trait FetchResultsTrait
{
    public string $key = '';
    public string $period = '';

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

        $response = Http::withToken(config('plausible.key'))
            ->post($this->getApiUrl(), $queryBody);

        if (! $response->ok()) {
            return null;
        }

        $data = $response->json();

        return $data['results'] ?? $data;
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
            '6mo' => '6mo',
            '12mo' => '12mo',
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
        return Cache::get($this->key, function() {
            return $this->handleResults();
        });
    }
}
