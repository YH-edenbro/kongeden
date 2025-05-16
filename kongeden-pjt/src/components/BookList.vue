<template>
  <div class="container my-5">
    <h1 class="mb-4">📚 도서 목록</h1>

    <!-- 카테고리 필터 -->
    <div class="mb-3">
      <select
        v-model="bookStore.selectedCategory"
        class="form-select w-auto"
      >
        <option :value="0">전체 보기</option>
        <option
          v-for="category in bookStore.categories"
          :key="category.pk"
          :value="category.pk"
        >
          {{ category.fields.name }}
        </option>
      </select>
    </div>

    <!-- 도서 목록 카드 -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <BookCard
        v-for="book in bookStore.filteredBooks"
        :key="book.pk"
        :book="book"
      />
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
