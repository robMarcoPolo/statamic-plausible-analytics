<template>
    <div :class="widget ? '' : 'bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 overflow-hidden'">
        <!-- Header (only for non-widget mode) -->
        <div v-if="!widget" class="px-4 py-3 border-b border-gray-200 dark:border-dark-700">
            <h3 class="font-semibold text-gray-900 dark:text-dark-100 flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                Top Sources
            </h3>
        </div>

        <!-- Loading skeleton -->
        <div v-if="loading" class="p-4 space-y-3">
            <div v-for="i in 5" :key="i" class="animate-pulse">
                <div class="flex justify-between items-center mb-1">
                    <div class="h-4 bg-gray-200 dark:bg-dark-700 rounded w-40"></div>
                    <div class="h-4 bg-gray-200 dark:bg-dark-700 rounded w-12"></div>
                </div>
                <div class="h-1.5 bg-gray-100 dark:bg-dark-700 rounded-full"></div>
            </div>
        </div>

        <!-- Content -->
        <div v-else-if="referrers.length > 0" class="divide-y divide-gray-100 dark:divide-dark-700">
            <div
                v-for="(referrer, index) in referrers"
                :key="index"
                class="group relative px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-750 transition-colors"
            >
                <!-- Progress bar background -->
                <div
                    class="absolute inset-y-0 left-0 bg-amber-50 dark:bg-amber-900/20 transition-all"
                    :style="{ width: getPercentage(referrer.visitors) + '%' }"
                ></div>

                <!-- Content -->
                <div class="relative flex justify-between items-center gap-4">
                    <div class="flex items-center gap-2 min-w-0">
                        <img
                            v-if="referrer.source && referrer.source !== 'Direct / None'"
                            :src="getFaviconUrl(referrer.source)"
                            class="w-4 h-4 rounded"
                            @error="handleImageError"
                        />
                        <span v-else class="w-4 h-4 flex items-center justify-center text-gray-400">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="2" y1="12" x2="22" y2="12"/>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                        </span>
                        <span class="text-sm text-gray-700 dark:text-dark-200 truncate font-medium" :title="referrer.source">
                            {{ referrer.source || 'Direct / None' }}
                        </span>
                    </div>
                    <span class="text-sm font-semibold text-gray-900 dark:text-dark-100 tabular-nums whitespace-nowrap">
                        {{ formatNumber(referrer.visitors) }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Empty state -->
        <div v-else class="p-8 text-center text-gray-500 dark:text-dark-300">
            <svg class="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-dark-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <p class="text-sm">No referrer data for this period</p>
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
        const referrers = ref([]);
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
            if (referrers.value.length === 0) return 0;
            return Math.max(...referrers.value.map(r => r.visitors));
        });

        const getPercentage = (visitors) => {
            if (maxVisitors.value === 0) return 0;
            return Math.round((visitors / maxVisitors.value) * 100);
        };

        const formatNumber = (num) => {
            return new Intl.NumberFormat().format(num);
        };

        const getFaviconUrl = (source) => {
            if (!source) return '';
            // Clean up the source to get just the domain
            let domain = source.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
            return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
        };

        const handleImageError = (event) => {
            event.target.style.display = 'none';
        };

        const fetchData = async () => {
            loading.value = true;
            try {
                const response = await fetch(`/cp/plausible/api/top-referrers?period=${props.period}`);
                const result = await response.json();
                referrers.value = Array.isArray(result) ? result : [];
            } catch (err) {
                console.error('Failed to fetch top referrers:', err);
                referrers.value = [];
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
            referrers,
            loading,
            periodLabel,
            getPercentage,
            formatNumber,
            getFaviconUrl,
            handleImageError
        };
    }
};
</script>
