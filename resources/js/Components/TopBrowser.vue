<template>
    <div :class="widget ? '' : 'bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 overflow-hidden'">
        <!-- Header (only for non-widget mode) -->
        <div v-if="!widget" class="px-4 py-3 border-b border-gray-200 dark:border-dark-700">
            <h3 class="font-semibold text-gray-900 dark:text-dark-100 flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="4"/>
                    <line x1="21.17" y1="8" x2="12" y2="8"/>
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
                </svg>
                Top Browsers
            </h3>
        </div>

        <!-- Loading skeleton -->
        <div v-if="loading" class="p-4 space-y-3">
            <div v-for="i in 5" :key="i" class="animate-pulse">
                <div class="flex justify-between items-center mb-1">
                    <div class="h-4 bg-gray-200 dark:bg-dark-700 rounded w-32"></div>
                    <div class="h-4 bg-gray-200 dark:bg-dark-700 rounded w-12"></div>
                </div>
                <div class="h-1.5 bg-gray-100 dark:bg-dark-700 rounded-full"></div>
            </div>
        </div>

        <!-- Content -->
        <div v-else-if="items.length > 0" class="divide-y divide-gray-100 dark:divide-dark-700">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="group relative px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-750 transition-colors"
            >
                <!-- Progress bar background -->
                <div
                    class="absolute inset-y-0 left-0 bg-emerald-50 dark:bg-emerald-900/20 transition-all"
                    :style="{ width: getPercentage(item.visitors) + '%' }"
                ></div>

                <!-- Content -->
                <div class="relative flex justify-between items-center gap-4">
                    <div class="flex items-center gap-2">
                        <span class="text-lg">{{ getBrowserIcon(item.browser) }}</span>
                        <span class="text-sm text-gray-700 dark:text-dark-200 font-medium">
                            {{ item.browser || 'Unknown' }}
                        </span>
                    </div>
                    <span class="text-sm font-semibold text-gray-900 dark:text-dark-100 tabular-nums">
                        {{ formatNumber(item.visitors) }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Empty state -->
        <div v-else class="p-8 text-center text-gray-500 dark:text-dark-300">
            <svg class="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-dark-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <p class="text-sm">No browser data for this period</p>
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
        const items = ref([]);
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
            if (items.value.length === 0) return 0;
            return Math.max(...items.value.map(i => i.visitors));
        });

        const getPercentage = (visitors) => {
            if (maxVisitors.value === 0) return 0;
            return Math.round((visitors / maxVisitors.value) * 100);
        };

        const formatNumber = (num) => {
            return new Intl.NumberFormat().format(num);
        };

        const getBrowserIcon = (browser) => {
            const icons = {
                'Chrome': '🌐',
                'Firefox': '🦊',
                'Safari': '🧭',
                'Edge': '🔷',
                'Opera': '🔴',
                'IE': '🔵',
                'Samsung Browser': '📱',
                'Brave': '🦁'
            };
            return icons[browser] || '🌐';
        };

        const fetchData = async () => {
            loading.value = true;
            try {
                const response = await fetch(`/cp/plausible/api/top-browsers?period=${props.period}`);
                const result = await response.json();
                items.value = Array.isArray(result) ? result : [];
            } catch (err) {
                console.error('Failed to fetch top browsers:', err);
                items.value = [];
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
            items,
            loading,
            periodLabel,
            getPercentage,
            formatNumber,
            getBrowserIcon
        };
    }
};
</script>
