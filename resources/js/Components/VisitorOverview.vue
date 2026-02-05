<template>
    <div class="bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 mb-4 overflow-hidden">
        <!-- Header for widget mode -->
        <div v-if="widget" class="px-4 py-3 border-b border-gray-200 dark:border-dark-700">
            <h3 class="font-semibold text-gray-900 dark:text-dark-100 flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
                Analytics
                <span class="text-sm font-normal text-gray-500 dark:text-dark-300">({{ periodLabel }})</span>
            </h3>
        </div>

        <!-- Stats -->
        <Aggregates :period="period" />

        <!-- Chart -->
        <div v-if="showGraph" class="p-4 pt-2">
            <!-- Loading skeleton -->
            <div v-if="loading" class="h-48 animate-pulse bg-gray-100 dark:bg-dark-700 rounded"></div>

            <!-- Chart -->
            <div v-else-if="hasData" class="h-48">
                <Line
                    :data="chartData"
                    :options="chartOptions"
                />
            </div>

            <!-- Empty state -->
            <div v-else class="h-48 flex items-center justify-center text-gray-500 dark:text-dark-300">
                <div class="text-center">
                    <svg class="w-12 h-12 mx-auto mb-2 text-gray-300 dark:text-dark-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p class="text-sm">No visitor data for this period</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import Aggregates from './Aggregates.vue';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default {
    components: {
        Line,
        Aggregates
    },

    props: {
        period: {
            type: String,
            required: true
        },
        widget: {
            type: Boolean,
            required: false,
            default: false
        },
        showGraph: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    setup(props) {
        const labels = ref([]);
        const series = ref([]);
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

        const hasData = computed(() => series.value.length > 0);

        const chartData = computed(() => ({
            labels: labels.value.map(label => formatDateLabel(label)),
            datasets: [
                {
                    label: 'Visitors',
                    data: series.value,
                    fill: true,
                    borderColor: '#8B5CF6',
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.3)');
                        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.02)');
                        return gradient;
                    },
                    borderWidth: 2,
                    tension: 0.35,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#8B5CF6',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2
                }
            ]
        }));

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        title: (items) => items[0]?.label || '',
                        label: (context) => `${context.parsed.y.toLocaleString()} visitors`
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            size: 11
                        },
                        maxRotation: 0,
                        maxTicksLimit: 8
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(156, 163, 175, 0.1)'
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            size: 11
                        },
                        callback: (value) => {
                            if (value >= 1000) {
                                return (value / 1000).toFixed(value >= 10000 ? 0 : 1) + 'k';
                            }
                            return value;
                        }
                    },
                    border: {
                        display: false
                    }
                }
            }
        };

        const formatDateLabel = (dateStr) => {
            if (!dateStr) return '';
            try {
                const date = new Date(dateStr);
                const now = new Date();
                const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

                if (diffDays === 0) return 'Today';
                if (diffDays === 1) return 'Yesterday';

                return date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
            } catch {
                return dateStr;
            }
        };

        const fetchData = async () => {
            loading.value = true;
            try {
                const response = await fetch(`/cp/plausible/api/timeseries?period=${props.period}`);
                const data = await response.json();
                labels.value = data.labels || [];
                series.value = data.series || [];
            } catch (err) {
                console.error('Failed to fetch timeseries data:', err);
                labels.value = [];
                series.value = [];
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
            labels,
            series,
            loading,
            hasData,
            periodLabel,
            chartData,
            chartOptions
        };
    }
};
</script>
