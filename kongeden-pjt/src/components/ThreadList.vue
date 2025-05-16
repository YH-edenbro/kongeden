<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ThreadItem
      v-for="thread in threads"
      :key="thread.id"
      :thread="thread"
    />
  </div>
</template>

<script setup>
import ThreadItem from './ThreadItem.vue'

const props = defineProps({
  threads: Array
})
</script>
