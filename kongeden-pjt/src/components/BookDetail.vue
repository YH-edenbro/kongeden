<template>
  <div class="container my-5" v-if="book">
    <h1>{{ book.fields.title }}</h1>
    <img :src="book.fields.cover" class="img-fluid my-3" />
    <p><strong>저자:</strong> {{ book.fields.author }}</p>
    <p><strong>출판사:</strong> {{ book.fields.publisher }}</p>
    <p><strong>설명:</strong> {{ book.fields.description }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useBookStore } from '@/stores/bookstore'
import { computed } from 'vue'

const route = useRoute()
const bookStore = useBookStore()

const bookId = parseInt(route.params.bookId, 10)

const book = computed(() =>
  bookStore.books.find((b) => b.pk === bookId)
)
</script>
