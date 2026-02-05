<template>
    <div :class="widget ? '' : 'bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 overflow-hidden'">
        <!-- Header (only for non-widget mode) -->
        <div v-if="!widget" class="px-4 py-3 border-b border-gray-200 dark:border-dark-700">
            <h3 class="font-semibold text-gray-900 dark:text-dark-100 flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
                Top Pages
            </h3>
        </div>

        <!-- Loading skeleton -->
        <div v-if="loading" class="p-4 space-y-3">
            <div v-for="i in 5" :key="i" class="animate-pulse">
                <div class="flex justify-between items-center mb-1">
                    <div class="h-4 bg-gray-200 dark:bg-dark-700 rounded w-48"></div>
                    <div class="h-4 bg-gray-200 dark:bg-dark-700 rounded w-12"></div>
                </div>
                <div class="h-1.5 bg-gray-100 dark:bg-dark-700 rounded-full"></div>
            </div>
        </div>

        <!-- Content -->
        <div v-else-if="pages.length > 0" class="divide-y divide-gray-100 dark:divide-dark-700">
            <div
                v-for="(page, index) in pages"
                :key="index"
                class="group relative px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-750 transition-colors"
            >
                <!-- Progress bar background -->
                <div
                    class="absolute inset-y-0 left-0 bg-violet-50 dark:bg-violet-900/20 transition-all"
                    :style="{ width: getPercentage(page.visitors) + '%' }"
                ></div>

                <!-- Content -->
                <div class="relative flex justify-between items-center gap-4">
                    <span class="text-sm text-gray-700 dark:text-dark-200 truncate font-medium" :title="page.page">
                        {{ page.page }}
                    </span>
                    <span class="text-sm font-semibold text-gray-900 dark:text-dark-100 tabular-nums whitespace-nowrap">
                        {{ formatNumber(page.visitors) }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Empty state -->
        <div v-else class="p-8 text-center text-gray-500 dark:text-dark-300">
            <svg class="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-dark-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p class="text-sm">No page data for this period</p>
        </div>
    </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';

export default {
    props: {
        period: {
            type: String,
            required: true
        },
        widget: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    setup(props) {
        const pages = ref([]);
        const loading = ref(true);

        const periodLabels = {
            'day': 'Today',
            'yesterday': 'Yesterday',
            '7d': 'Last 7 days',
            '30d': 'Last 30 days',
            '6mo': 'Last 6 months',
            '12mo': 'Last 12 months'
        };

        const periodLabel = computed(() => periodLabels[props.period] || props.period);

        const maxVisitors = computed(() => {
            if (pages.value.length === 0) return 0;
            return Math.max(...pages.value.map(p => p.visitors));
        });

        const getPercentage = (visitors) => {
            if (maxVisitors.value === 0) return 0;
            return Math.round((visitors / maxVisitors.value) * 100);
        };

        const formatNumber = (num) => {
            return new Intl.NumberFormat().format(num);
        };

        const fetchData = async () => {
            loading.value = true;
            try {
                const response = await fetch(`/cp/plausible/api/top-pages?period=${props.period}`);
                const result = await response.json();
                pages.value = Array.isArray(result) ? result : [];
            } catch (err) {
                console.error('Failed to fetch top pages:', err);
                pages.value = [];
            } finally {
                loading.value = false;
            }
        };

        watch(() => props.period, () => {
            fetchData();
        }, { immediate: true });

        onMounted(() => {
            fetchData();
        });

        return {
            pages,
            loading,
            periodLabel,
            getPercentage,
            formatNumber
        };
    }
};
</script>
