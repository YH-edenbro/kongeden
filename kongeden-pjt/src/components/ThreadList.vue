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

<style scoped>
.banner-img {
  max-height: 300px;
  object-fit: cover;
  filter: brightness(60%);
}
.banner-title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
}

.content-box {
  line-height: 1.8;
  font-size: 1rem;
  white-space: pre-line;
}
</style>