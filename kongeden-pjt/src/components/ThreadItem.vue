<template>
  <div class="card mb-3 p-3">
    <h5 class="fw-bold">
      <RouterLink :to="{name : 'threadDetail', params: {threadId: thread.threadId} }" class="text-decoration-none text-dark">
        {{ thread.title }}
      </RouterLink>
    </h5>
    <p>{{ thread.content }}</p>
    <p class="text-muted small">📘 {{ getBookTitle(thread.bookId) }}</p>
  </div>
</template>

<script setup>
import { useBookStore } from '@/stores/bookstore'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  thread: Object,
  index: Number // 상세 보기 이동을 위해 index를 전달
})

const bookStore = useBookStore()

// 책 제목 반환 함수
function getBookTitle(bookId) {
  const book = bookStore.books.find((b) => b.pk === bookId)
  return book ? book.fields.title : '제목 없음'
}
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
</style>
