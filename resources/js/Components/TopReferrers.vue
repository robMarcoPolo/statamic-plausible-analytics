<template>
    <div class="p-0 card">
        <h3 class="p-2">Top Referrers <span v-if="widget">(Last {{ period }})</span></h3>

        <table class="data-table">
            <thead>
                <tr>
                    <th>Referrer</th>
                    <th class="text-right">Visitors</th>
                </tr>
            </thead>
            <tbody>
                <tr class="outline-none" v-for="(referrer, index) in referrers" :key="index">
                    <td class="text-sm">{{ referrer.source ? referrer.source : 'Other/Direct' }}</td>
                    <td class="text-right">{{ referrer.visitors }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';

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

        const fetchData = async () => {
            try {
                const response = await fetch(`/cp/plausible/api/top-referrers?period=${props.period}`);
                const result = await response.json();
                referrers.value = result;
            } catch (err) {
                console.error('Failed to fetch top referrers:', err);
            }
        };

        watch(() => props.period, () => {
            fetchData();
        }, { immediate: true });

        onMounted(() => {
            fetchData();
        });

        return {
            referrers
        };
    }
};
</script>
