<template>
    <h1>SORTING ALGORITHM</h1>
    <canvas id="Bubble" width="650" height="220" @click="bubbleSort.runSort()"></canvas>
    <canvas id="Select" width="650" height="220" @click="selectSort.runSort()"></canvas>
    <canvas id="Insert" width="650" height="220" @click="insertSort.runSort()"></canvas>
    <canvas id="Quick" width="650" height="220" @click="quickSort.runSort()"></canvas> 
</template>

<script setup lang="ts">
import BubbleSort from './sort/BubbleSort'
import InsertSort from './sort/InsertSort'
import QuickSort from './sort/QuickSort'
import SelectSort from './sort/SelectSort'
import Sort from './sort/Sort'
import { onMounted } from 'vue'

let bubbleSort: Sort
let selectSort: Sort
let insertSort: Sort
let quickSort: Sort

onMounted(() => {
    bubbleSort = new BubbleSort(200, 'Bubble')
    selectSort = new SelectSort(200, 'Select')
    insertSort = new InsertSort(200, 'Insert')
    quickSort = new QuickSort(200, 'Quick')
})
</script>

<style scoped>
canvas {
    border: 1px solid #777;
    background-color: orange;
}

button {
    width: 100px;
    height: 40px;
}
</style>