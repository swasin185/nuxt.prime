<template>
    <Card>
        <template #title>Hello World</template>
        <template #content>
            <h2 v-if="counter > 0">counter = {{ counter }}</h2>
        </template>
        <template #footer>
            <ProgressBar v-if="counter == 0" mode="indeterminate" style="height: 6px"></ProgressBar>
        </template>
    </Card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const counter = ref(0)
onMounted(async () => {
    counter.value = await $fetch('/api/counter')
})
</script>
<style scoped></style>
