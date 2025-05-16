<template>
  <div class="book-list-wrapper py-5">
    <div class="container">
      <h1 class="mb-4 text-light">📚 도서 목록</h1>

      <!-- 카테고리 필터 -->
      <div class="mb-3">
        <select
          v-model="bookStore.selectedCategory"
          class="form-select w-auto bg-dark text-light border-secondary"
        >
          <option
            v-for="category in bookStore.categories"
            :key="category.pk"
            :value="category.pk"
          >
            {{ category.fields.name }}
          </option>
        </select>
      </div>

      <!-- 도서 목록 2열 그리드 -->
      <div class="row g-4">
        <div
          class="col-12 col-md-6"
          v-for="book in bookStore.filteredBooks"
          :key="book.pk"
        >
          <BookCard :book="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBookStore } from '@/stores/bookstore'
import BookCard from '@/components/BookCard.vue'

const bookStore = useBookStore()

onMounted(() => {
  bookStore.loadBooks()
  bookStore.loadCategories()
})
</script>

<style scoped>
.book-list-wrapper {
  background-color: #121212;
  min-height: 100vh;
}
</style>
