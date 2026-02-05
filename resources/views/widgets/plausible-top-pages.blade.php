<div class="flex h-full min-h-54 flex-col">
    <header class="flex items-center min-h-[49px] justify-between border-b border-gray-200 px-4.5 py-2 dark:border-gray-700">
        <a class="flex items-center gap-2 sm:gap-3" href="{{ cp_route('plausible.index') }}">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-4 shrink-0 size-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span>Top Pages ({{ $period }})</span>
        </a>
    </header>
    <div class="px-4 py-3 flex-1">
        <plausible-top-pages period="{{ $period }}" :widget="true" />
    </div>
</div>
