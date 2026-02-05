<?php

namespace Jackabox\Plausible\Http\Controllers\Api;

use Illuminate\Http\Request;
use Jackabox\Plausible\Http\Traits\FetchResultsTrait;
use Statamic\Http\Controllers\CP\CpController;

class TimeseriesController extends CpController
{
    use FetchResultsTrait;

    public function __construct()
    {
        $this->key = 'plausible_timeseries_' . config('plausible.default_period');
    }

    public function fetch(Request $request): mixed
    {
        $period = $request->get('period') ?: '6mo';
        $this->period = $period;
        $this->key = 'plausible_timeseries_' . $this->period;

        if (config('plausible.cache_enabled')) {
            return $this->getCachedResults();
        }

        return $this->handleResults();
    }

    public function handleResults(): array
    {
        $dateRange = $this->convertPeriodToDateRange($this->period);

        $queryBody = [
            'metrics' => ['visitors'],
            'date_range' => $dateRange,
            'dimensions' => ['time:day'],
        ];

        $data = $this->executeQuery($queryBody);

        if ($data === null) {
            return ['labels' => [], 'series' => []];
        }

        $labels = [];
        $series = [];

        foreach ($data as $item) {
            $labels[] = $item['dimensions'][0] ?? '';
            $series[] = $item['metrics'][0] ?? 0;
        }

        $results = [
            'labels' => $labels,
            'series' => $series
        ];

        $this->cacheResults($results);

        return $results;
    }
}
