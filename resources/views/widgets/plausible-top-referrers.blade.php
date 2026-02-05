<div class="bg-white dark:bg-gray-850 rounded-xl ring ring-gray-200 dark:ring-gray-700/80 shadow-sm @container/widget">
    <div class="flex h-full min-h-54 flex-col">
        <header class="flex items-center min-h-[49px] justify-between border-b border-gray-200 px-4.5 py-2 dark:border-gray-700">
            <a class="flex items-center gap-2 sm:gap-3" href="{{ cp_route('plausible.index') }}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-4 shrink-0 size-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                <span>Top Sources ({{ $period }})</span>
            </a>
        </header>
        <div class="px-4 py-3 flex-1">
            <plausible-top-referrers period="{{ $period }}" :widget="true" />
        </div>
    </div>
</div>
