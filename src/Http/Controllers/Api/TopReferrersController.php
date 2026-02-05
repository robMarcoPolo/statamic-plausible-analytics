<?php

namespace Jackabox\Plausible\Http\Controllers\Api;

use Illuminate\Http\Request;
use Jackabox\Plausible\Http\Traits\FetchResultsTrait;
use Statamic\Http\Controllers\CP\CpController;

class TopReferrersController extends CpController
{
    use FetchResultsTrait;

    public function fetch(Request $request): mixed
    {
        $period = $request->get('period') ?: '6mo';
        $this->period = $period;
        $this->key = 'plausible_top_referrers_' . $this->period;

        if (config('plausible.cache_enabled')) {
            return $this->getCachedResults();
        }

        return $this->handleResults();
    }

    public function handleResults(): mixed
    {
        $dateRange = $this->convertPeriodToDateRange($this->period);
        $limit = config('plausible.results_limit', 5);

        $queryBody = [
            'metrics' => ['visitors'],
            'date_range' => $dateRange,
            'dimensions' => ['visit:source'],
            'limit' => $limit,
        ];

        $results = $this->executeQuery($queryBody);

        if ($results === null) {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }

        // Transform API v2 response format to match expected frontend format
        $transformed = [];
        foreach ($results as $result) {
            $transformed[] = [
                'source' => $result['dimensions'][0] ?? '',
                'visitors' => $result['metrics'][0] ?? 0,
            ];
        }

        $this->cacheResults($transformed);

        return $transformed;
    }
}
