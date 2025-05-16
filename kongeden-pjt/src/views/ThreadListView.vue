<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">전체 스레드 목록</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script setup>
import ThreadList from '@/components/ThreadList.vue'
import { ref, onMounted } from 'vue'

const threads = ref([])

onMounted(async () => {
  // 예시 API 호출
  const res = await fetch('/api/threads')
  threads.value = await res.json()
})
</script>
