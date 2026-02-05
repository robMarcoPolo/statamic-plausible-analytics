<div class="flex h-full min-h-54 flex-col">
    <header class="flex items-center min-h-[49px] justify-between border-b border-gray-200 px-4.5 py-2 dark:border-gray-700">
        <a class="flex items-center gap-2 sm:gap-3" href="{{ cp_route('plausible.index') }}">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-4 shrink-0 size-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="4"/>
                <line x1="21.17" y1="8" x2="12" y2="8"/>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
            </svg>
            <span>Top Browsers ({{ $period }})</span>
        </a>
    </header>
    <div class="px-4 py-3 flex-1">
        <plausible-top-browsers period="{{ $period }}" :widget="true" />
    </div>
</div>
