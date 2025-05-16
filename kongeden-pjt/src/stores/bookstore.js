import { defineStore } from 'pinia'
import booksData from '/fixtures/books.json'
import categoriesData from '/fixtures/categories.json'

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
