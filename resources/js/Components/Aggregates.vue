<template>
    <div class="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        <!-- Loading skeleton -->
        <template v-if="loading">
            <div v-for="i in 4" :key="i" class="animate-pulse">
                <div class="h-3 w-20 bg-gray-200 dark:bg-dark-700 rounded mb-2"></div>
                <div class="h-8 w-24 bg-gray-200 dark:bg-dark-700 rounded"></div>
            </div>
        </template>

        <!-- Stats -->
        <template v-else-if="hasData">
            <div
                v-for="stat in stats"
                :key="stat.key"
                class="group"
            >
                <div class="text-xs font-medium text-gray-500 dark:text-dark-200 uppercase tracking-wide mb-1">
                    {{ stat.label }}
                </div>
                <div class="text-2xl font-semibold text-gray-900 dark:text-dark-100 tabular-nums">
                    {{ stat.formattedValue }}
                </div>
            </div>
        </template>

        <!-- Empty state -->
        <template v-else>
            <div class="col-span-4 text-center py-4 text-gray-500 dark:text-dark-300">
                No data available for this period
            </div>
        </template>
    </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';

export default {
    props: {
        period: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const data = ref({});
        const loading = ref(true);

        const hasData = computed(() => {
            return Object.keys(data.value).length > 0;
        });

        const stats = computed(() => {
            const statConfig = [
                { key: 'visitors', label: 'Unique Visitors', format: 'number' },
                { key: 'pageviews', label: 'Total Pageviews', format: 'number' },
                { key: 'bounce_rate', label: 'Bounce Rate', format: 'percent' },
                { key: 'visit_duration', label: 'Visit Duration', format: 'duration' }
            ];

            return statConfig.map(config => {
                const value = data.value[config.key]?.value ?? 0;
                return {
                    key: config.key,
                    label: config.label,
                    value: value,
                    formattedValue: formatValue(value, config.format)
                };
            });
        });

        const formatValue = (value, format) => {
            if (value === null || value === undefined) return '-';

            switch (format) {
                case 'number':
                    return new Intl.NumberFormat().format(value);
                case 'percent':
                    return `${Math.round(value)}%`;
                case 'duration':
                    return formatDuration(value);
                default:
                    return value;
            }
        };

        const formatDuration = (seconds) => {
            if (seconds < 60) {
                return `${Math.round(seconds)}s`;
            }
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.round(seconds % 60);
            if (minutes < 60) {
                return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
            }
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            return `${hours}h ${remainingMinutes}m`;
        };

        const fetchData = async () => {
            loading.value = true;
            try {
                const response = await fetch(`/cp/plausible/api/aggregates?period=${props.period}`);
                const result = await response.json();
                data.value = result;
            } catch (err) {
                console.error('Failed to fetch aggregates:', err);
                data.value = {};
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
            data,
            loading,
            hasData,
            stats
        };
    }
};
</script>
