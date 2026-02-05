<template>
    <div class="flex justify-between p-0 border-b">
        <div
            v-for="(item, key, index) in data"
            :key="key"
            :class="{ 'border-r': index != getArrayLength }"
            class="w-1/4 p-2 last:border-0"
        >
            <h5 class="mb-1 text-xs font-medium uppercase text-grey-70">{{ getKeyTitle(key) }}</h5>
            <p class="text-2xl">
                {{ item.value }}{{ getKeyEnding(key) }}
            </p>
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
        }
    },

    setup(props) {
        const data = ref({});

        const getArrayLength = computed(() => {
            return Object.keys(data.value).length - 1;
        });

        const getKeyTitle = (key) => {
            return key.replace(/_/g, ' ');
        };

        const getKeyEnding = (key) => {
            if (key === 'bounce_rate') {
                return '%';
            }
            if (key === 'visit_duration') {
                return 's';
            }
            return '';
        };

        const fetchData = async () => {
            try {
                const response = await fetch(`/cp/plausible/api/aggregates?period=${props.period}`);
                const result = await response.json();
                data.value = result;
            } catch (err) {
                console.error('Failed to fetch aggregates:', err);
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
            getArrayLength,
            getKeyTitle,
            getKeyEnding
        };
    }
};
</script>
