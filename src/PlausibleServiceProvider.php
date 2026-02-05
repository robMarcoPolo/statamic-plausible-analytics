<?php

namespace Jackabox\Plausible;

use Illuminate\Support\Facades\Log;
use Statamic\Facades\CP\Nav;
use Statamic\Providers\AddonServiceProvider;

class PlausibleServiceProvider extends AddonServiceProvider
{
    protected $publishAfterInstall = true;

    protected $routes = [
        'cp' => __DIR__ . '/../routes/cp.php'
    ];

    protected $vite = [
        'input' => [
            'resources/js/cp.js',
        ],
        'publicDirectory' => 'dist',
        'buildDirectory' => 'build',
    ];

    protected $publishables = [
        __DIR__ . '/../dist' => 'statamic-plausible-analytics',
    ];

    protected $widgets = [
        Widgets\PlausibleTopPages::class,
        Widgets\PlausibleTopBrowsers::class,
        Widgets\PlausibleTopReferrers::class,
        Widgets\PlausibleVisitorOverview::class,
    ];

    public function bootAddon(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views/', 'plausible');
        $this->mergeConfigFrom(__DIR__ . '/../config/plausible.php', 'plausible');

        $this->validateConfiguration();
        $this->createNavigation();

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/plausible.php' => config_path('plausible.php'),
            ], 'plausible-config');
        }
    }

    /**
     * Validate configuration and log any issues
     */
    private function validateConfiguration(): void
    {
        $issues = [];

        if (empty(config('plausible.key'))) {
            $issues[] = 'PLAUSIBLE_KEY is not set';
        }

        if (empty(config('plausible.site'))) {
            $issues[] = 'PLAUSIBLE_SITE is not set';
        }

        $domain = config('plausible.domain');
        if (empty($domain)) {
            $issues[] = 'PLAUSIBLE_DOMAIN is not set';
        } elseif (! filter_var($domain, FILTER_VALIDATE_URL)) {
            $issues[] = "PLAUSIBLE_DOMAIN '{$domain}' is not a valid URL";
        }

        if (! empty($issues)) {
            Log::warning('[Plausible] Configuration issues detected', [
                'issues' => $issues,
            ]);
        } elseif (config('plausible.debug')) {
            Log::debug('[Plausible] Configuration validated successfully', [
                'site' => config('plausible.site'),
                'domain' => config('plausible.domain'),
                'cache_enabled' => config('plausible.cache_enabled'),
                'debug' => true,
            ]);
        }
    }

    private function createNavigation(): void
    {
        if (
            (! config('plausible.key') || ! config('plausible.site'))
            && config('app.env') === 'production'
        ) {
            return;
        }

        Nav::extend(function ($nav) {
            $nav->create('Analytics')
                ->icon('charts')
                ->section('Tools')
                ->route('plausible.index');
        });
    }
}
