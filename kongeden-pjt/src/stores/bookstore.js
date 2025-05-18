import { defineStore } from 'pinia'
import booksData from '/fixtures/books.json'
import categoriesData from '/fixtures/categories.json'
import { ref } from 'vue'

export const useBookStore = defineStore('bookstore', {
  state: () => ({
    books: [],
    categories: [],
    selectedCategory: 0,
  }),

  getters: {
    filteredBooks(state) {
      if (state.selectedCategory === 0) return state.books
      return state.books.filter(
        (book) => book.fields.category === state.selectedCategory
      )
    },

    categoryName(state) {
      return (id) => {
        const category = state.categories.find((c) => c.pk === id)
        return category ? category.fields.name : '알 수 없음'
      }
    },
  },

  actions: {
    loadBooks() {
      this.books = booksData
    },

    loadCategories() {
      this.categories = categoriesData
    },

    setCategory(categoryId) {
      this.selectedCategory = categoryId
    },
  },
})

export const useThreadStore = defineStore('thread', () => {
  const threads = ref([])
  let nextThreadId = ref(0) // ✅ 스토어의 state로 관리

  const addThread = function (thread) {
    threads.value.push({
      threadId: nextThreadId.value++, // ✅ 스토어의 state를 사용하여 id 할당 후 증가
      title: thread.title,
      content: thread.content,
      bookId: thread.bookId,
      createdAt: new Date().toISOString(),
    })
  }

  return { threads, addThread }
}, { persist: true })