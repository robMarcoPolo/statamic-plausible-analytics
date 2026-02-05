<?php

namespace Jackabox\Plausible;

use Statamic\Facades\CP\Nav;
use Statamic\Providers\AddonServiceProvider;

class PlausibleServiceProvider extends AddonServiceProvider
{
    protected $publishAfterInstall = false;

    protected $routes = [
        'cp' => __DIR__ . '/../routes/cp.php'
    ];

    protected $vite = [
        'input' => [
            'resources/js/cp.js',
        ],
        'publicDirectory' => 'dist',
    ];

    protected $widgets = [
        Widgets\PlausibleTopPages::class,
        Widgets\PlausibleTopBrowsers::class,
        Widgets\PlausibleTopReferrers::class,
        Widgets\PlausibleVisitorOverview::class,
    ];

    public function bootAddon(): void
    {
        $this->createNavigation();

        $this->loadViewsFrom(__DIR__ . '/../resources/views/', 'plausible');
        $this->mergeConfigFrom(__DIR__ . '/../config/plausible.php', 'plausible');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/plausible.php' => config_path('plausible.php'),
            ], 'plausible-config');
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
