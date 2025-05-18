<template>
  <div class="bg-dark py-5">
    <div class="container p-6 text-white">
      <h1 class="banner-title mb-4">전체 스레드 목록</h1>
      <div class="bg-secondary p-4 rounded shadow">
        <ThreadList :threads="threads" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ThreadList from '@/components/ThreadList.vue'
import { useThreadStore } from '@/stores/bookstore'
import { storeToRefs } from 'pinia'

const threadStore = useThreadStore()
const { threads } = storeToRefs(threadStore)
</script>

<style scoped>
.banner-title {
  font-size: 2.5rem; /* 조금 더 크게 */
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  text-align: center; /* 가운데 정렬 */
  margin-bottom: 2rem; /* 아래 여백 추가 */
}
</style>