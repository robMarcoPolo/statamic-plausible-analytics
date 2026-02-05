<template>
    <div class="p-0 card">
        <h3 class="p-2">Top Pages <span v-if="widget">(Last {{ period }})</span></h3>

        <table class="data-table">
            <thead>
                <tr>
                    <th>Page</th>
                    <th class="text-right">Visitors</th>
                </tr>
            </thead>
            <tbody>
                <tr class="outline-none" v-for="(page, index) in pages" :key="index">
                    <td>{{ page.page }}</td>
                    <td class="text-right">{{ page.visitors }}</td>
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
        const pages = ref([]);

        const fetchData = async () => {
            try {
                const response = await fetch(`/cp/plausible/api/top-pages?period=${props.period}`);
                const result = await response.json();
                pages.value = result;
            } catch (err) {
                console.error('Failed to fetch top pages:', err);
            }
        };

        watch(() => props.period, () => {
            fetchData();
        }, { immediate: true });

        onMounted(() => {
            fetchData();
        });

        return {
            pages
        };
    }
};
</script>
