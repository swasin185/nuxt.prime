<template>
    <div class="p-toolbar">
        <Button class="tool-button" icon="pi pi-sync" label="Refresh" @click="refresh" />
    </div>
    <div class="p-card flex flex-column flex-wrap">
        <Chart type="bar" :data="chartData" :options="chartOptions" style="width: 50%; height: 50%"/>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

onMounted(refresh)

const chartData = ref({
    labels: [],
    datasets: [
        {
            label: 'Memory (MB)',
            data: [],
            borderWidth: 1
        }
    ]
})

const chartOptions = ref({
    plugins: {
        title: {
            display: true,
            text: 'Server Status'
        }
    },
    scales: {
        x: {
            ticks: {
                color: 'white'
            },
            grid: {
                drawBorder: true
            }
        },
        y: {
            beginAtZero: false,
            ticks: {
                color: 'white'
            },
            grid: {
                color: 'darkgrey',
                drawBorder: true
            }
        }
    }
})

async function refresh() {
    const data: any = await $fetch('/api/server-status')
    chartData.value.labels = []
    chartData.value.datasets[0].data = []
    for (let att in data) {
        // console.log(att, data[att] / 0xfffff)
        chartData.value.labels.push(att as never)
        chartData.value.datasets[0].data.push((data[att] / 0xfffff) as never)
    }
}
</script>