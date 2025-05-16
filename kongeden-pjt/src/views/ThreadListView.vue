<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">전체 스레드 목록</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script setup>
import ThreadList from '@/components/ThreadList.vue'
import { useThreadStore } from '@/stores/bookstore' // 또는 '@/stores/thread'
import { storeToRefs } from 'pinia'

const threadStore = useThreadStore()
const { threads } = storeToRefs(threadStore) // 반응형 참조로 가져오기
</script>

