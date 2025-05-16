<template>
  <div>
    <ThreadItem
      v-for="(thread, index) in threads"
      :key="index"
      :thread="thread"
      :index="index"
    />
  </div>
</template>

<script setup>
import ThreadItem from './ThreadItem.vue'

const props = defineProps({
  threads: Array
})
</script>
