<?php

namespace Jackabox\Plausible\Http\Controllers\Api;

use Illuminate\Http\Request;
use Jackabox\Plausible\Http\Traits\FetchResultsTrait;
use Statamic\Http\Controllers\CP\CpController;

class AggregatesController extends CpController
{
    use FetchResultsTrait;

    public function __construct()
    {
        $this->key = 'plausible_aggregates_' . config('plausible.default_period');
    }

    public function fetch(Request $request): mixed
    {
        $period = $request->get('period') ?: '6mo';
        $this->period = $period;
        $this->key = 'plausible_aggregates_' . $this->period;

        if (config('plausible.cache_enabled')) {
            return $this->getCachedResults();
        }

        return $this->handleResults();
    }

    public function handleResults(): mixed
    {
        $dateRange = $this->convertPeriodToDateRange($this->period);

        $queryBody = [
            'metrics' => ['visitors', 'pageviews', 'bounce_rate', 'visit_duration'],
            'date_range' => $dateRange,
        ];

        $results = $this->executeQuery($queryBody);

        if ($results === null) {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }

        // Transform API v2 response format to match expected frontend format
        $transformed = [];
        if (isset($results[0]['metrics'])) {
            $metrics = $results[0]['metrics'];
            $metricNames = ['visitors', 'pageviews', 'bounce_rate', 'visit_duration'];
            foreach ($metricNames as $index => $name) {
                $transformed[$name] = ['value' => $metrics[$index] ?? 0];
            }
        }

        $this->cacheResults($transformed);

        return $transformed;
    }
}
