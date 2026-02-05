<template>
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <header class="flex flex-wrap items-center justify-between gap-4 px-2 sm:px-0 py-6 max-md:pb-8 md:py-8" data-ui-header>
            <h1 class="text-[25px] leading-[1.25] st-text-legibility font-medium antialiased flex items-center gap-2.5 md:flex-1">
                <div class="size-5 relative">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 3v18h18"/>
                        <path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                </div>
                Analytics
            </h1>
            <!-- Period selector -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                <div class="inline-flex rounded-lg border border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-800 p-1">
                    <button
                        v-for="option in periodOptions"
                        :key="option.value"
                        @click="range = option.value"
                        :class="[
                            'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                            range === option.value
                                ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300'
                                : 'text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-100'
                        ]"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </div>
        </header>

        <!-- Main content -->
        <div class="space-y-6">
            <!-- Visitor overview with chart -->
            <VisitorOverview :period="range" />

            <!-- Top Pages -->
            <TopPages :period="range" />

            <!-- Two column layout for sources and browsers -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopReferrers :period="range" />
                <TopBrowser :period="range" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import TopBrowser from './TopBrowser.vue';
import TopReferrers from './TopReferrers.vue';
import TopPages from './TopPages.vue';
import VisitorOverview from './VisitorOverview.vue';

export default {
    components: {
        VisitorOverview,
        TopReferrers,
        TopBrowser,
        TopPages
    },

    setup() {
        const range = ref('7d');

        const periodOptions = [
            { value: 'day', label: 'Today' },
            { value: '7d', label: '7D' },
            { value: '30d', label: '30D' },
            { value: '6mo', label: '6M' },
            { value: '12mo', label: '12M' }
        ];

        return {
            range,
            periodOptions
        };
    }
};
</script>
