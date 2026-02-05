<?php

return [
    /**
     * API Key from Plausible
     * Generate this at https://plausible.io/settings (Stats API)
     */
    'key' => env('PLAUSIBLE_KEY', null),

    /**
     * Site name as shown in the Plausible dashboard
     * e.g. jackwhiting.co.uk
     */
    'site' => env('PLAUSIBLE_SITE', null),

    /**
     * Do you want to use the cache?
     * True or False.
     */
    'cache_enabled' => env('PLAUSIBLE_CACHE', true),

    /**
     * Domain where your plausible instance is hosted
     * e.g. https://plausible.io (default) or your self-hosted instance
     */
    'domain' => env('PLAUSIBLE_DOMAIN', 'https://plausible.io'),

    /**
     * Cache duration in seconds
     */
    'cache_duration' => 20000,

    /**
     * Default Time Period
     * Options: day, yesterday, 7d, 30d, 6mo, 12mo
     */
    'default_period' => '6mo',

    /**
     * Number of results to show in breakdown widgets
     * (Top Pages, Top Browsers, Top Referrers)
     */
    'results_limit' => 5,

    /**
     * Enable debug logging
     * When enabled, logs all API requests and responses to Laravel's log
     * Errors are always logged regardless of this setting
     */
    'debug' => env('PLAUSIBLE_DEBUG', false),
];
