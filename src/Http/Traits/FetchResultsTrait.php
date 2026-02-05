<?php

namespace Jackabox\Plausible\Http\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

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
        $url = $this->getApiUrl();

        // Log request in debug mode
        if (config('plausible.debug')) {
            Log::debug('[Plausible] API Request', [
                'url' => $url,
                'site_id' => $queryBody['site_id'],
                'query' => $queryBody,
            ]);
        }

        try {
            $response = Http::withToken(config('plausible.key'))
                ->post($url, $queryBody);

            $statusCode = $response->status();
            $responseBody = $response->json();

            // Log successful response in debug mode
            if ($response->ok() && config('plausible.debug')) {
                Log::debug('[Plausible] API Response', [
                    'status' => $statusCode,
                    'results_count' => isset($responseBody['results']) ? count($responseBody['results']) : 'N/A',
                ]);
            }

            // Always log errors
            if (! $response->ok()) {
                Log::error('[Plausible] API Error', [
                    'url' => $url,
                    'status' => $statusCode,
                    'error' => $responseBody['error'] ?? 'Unknown error',
                    'site_id' => $queryBody['site_id'],
                    'query' => $queryBody,
                ]);

                return null;
            }

            return $responseBody['results'] ?? $responseBody;

        } catch (\Exception $e) {
            Log::error('[Plausible] API Exception', [
                'url' => $url,
                'message' => $e->getMessage(),
                'site_id' => $queryBody['site_id'],
                'query' => $queryBody,
            ]);

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

        if (config('plausible.debug')) {
            Log::debug('[Plausible] Results cached', [
                'key' => $this->key,
                'duration' => config('plausible.cache_duration'),
            ]);
        }
    }

    /**
     * Get cached results or fetch fresh data
     */
    public function getCachedResults(): mixed
    {
        $cached = Cache::get($this->key);

        if ($cached !== null) {
            if (config('plausible.debug')) {
                Log::debug('[Plausible] Cache hit', ['key' => $this->key]);
            }
            return $cached;
        }

        if (config('plausible.debug')) {
            Log::debug('[Plausible] Cache miss', ['key' => $this->key]);
        }

        return $this->handleResults();
    }
}
