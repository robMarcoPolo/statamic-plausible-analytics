<template>
    <div class="max-w-7xl mx-auto py-4">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <h1 class="text-[25px] leading-[1.25] st-text-legibility font-medium antialiased flex items-center gap-2.5 md:flex-1">Analytics</h1>
                <p class="text-sm text-gray-500 dark:text-dark-300 mt-1">
                    Powered by Plausible Analytics
                </p>
            </div>

            <!-- Period selector -->
            <div class="flex items-center gap-2">
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
        </div>

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
