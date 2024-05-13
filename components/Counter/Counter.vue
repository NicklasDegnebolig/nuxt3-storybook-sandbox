<script setup lang="ts">

defineProps({
  displayHint: {
      type: String,
    },

  })


import { useCounter } from '@/composables/counter'
import { storeToRefs } from 'pinia'

const counter = useCounter()

const { increment, decrement } = useCounter()
const { getCount } = storeToRefs(counter)

console.log(counter)
</script>

<template>
  <div>
    <h1>{{ getCount }}</h1>
    <Button title="increment" :type="displayHint" @click="increment" />
    <Button title="decrement" :type="displayHint" @click="decrement" />
  </div>
</template>

<style></style>
