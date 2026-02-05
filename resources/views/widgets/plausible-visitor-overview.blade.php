<div class="bg-white dark:bg-gray-850 rounded-xl ring ring-gray-200 dark:ring-gray-700/80 shadow-sm @container/widget">
    <div class="flex h-full min-h-54 flex-col">
        <header class="flex items-center min-h-[49px] justify-between border-b border-gray-200 px-4.5 py-2 dark:border-gray-700">
            <a class="flex items-center gap-2 sm:gap-3" href="{{ cp_route('plausible.index') }}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-4 shrink-0 size-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
                <span>Analytics ({{ $period }})</span>
            </a>
        </header>
        <plausible-visitor-overview
            period="{{ $period }}"
            :widget="true"
            :show-graph="{{ $show_graph ? 'true' : 'false' }}"
        />
    </div>
</div>
