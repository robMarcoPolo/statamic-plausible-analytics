<template>
    <div class="p-0 mb-4 card">
        <h3 v-if="widget" class="p-2">Analytics (Last {{ period }})</h3>

        <Aggregates :period="period" />

        <div v-if="showGraph" class="p-2">
            <Line
                :data="chartData"
                :options="chartOptions"
            />
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

        const chartData = computed(() => ({
            labels: labels.value,
            datasets: [
                {
                    label: 'Visitors',
                    data: series.value,
                    fill: true,
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }
            ]
        }));

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch(`/cp/plausible/api/timeseries?period=${props.period}`);
                const data = await response.json();
                labels.value = data.labels || [];
                series.value = data.series || [];
            } catch (err) {
                console.error('Failed to fetch timeseries data:', err);
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
            chartData,
            chartOptions
        };
    }
};
</script>
