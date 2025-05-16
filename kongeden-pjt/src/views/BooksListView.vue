<template>
  <div class="books-view-wrapper">
    <BookList />
  </div>
</template>

<script setup>
import BookList from '@/components/BookList.vue'
</script>

<style scoped>
.books-view-wrapper {
  background-color: #121212; /* 혹은 #000 */
  min-height: 100vh; /* 화면 꽉 채우기 */
  padding: 2rem 0; /* 위아래 여백 */
  color: white; /* 혹시나 빠진 텍스트 대비 */
}
</style>
