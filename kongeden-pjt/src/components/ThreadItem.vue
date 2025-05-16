<template>
  <div class="thread-card" @click="goToDetail">
    <img :src="thread.image" alt="Thread image" class="w-full h-48 object-cover rounded-t-xl" />
    <div class="p-4">
      <h3 class="text-lg font-bold">{{ thread.title }}</h3>
      <p class="text-sm text-gray-500 mt-2 line-clamp-3">{{ thread.summary }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  thread: Object
})

const router = useRouter()
const goToDetail = () => {
  router.push(`/threads/${thread.id}`)
}
</script>

<style scoped>
.thread-card {
  @apply bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg transition;
}
</style>
