<template>
  <div class="container my-5" v-if="book">
    <!-- 제목 & 쓰레드 작성 버튼 -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>{{ book.fields.title }}</h1>
      <button class="btn btn-outline-danger rounded-circle d-flex align-items-center justify-content-center" @click="goToThreadWrite" style="width: 40px; height: 40px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
        </svg>
      </button>
    </div>

    <div class="row">
      <!-- 책 커버 -->
      <div class="col-md-3 text-center mb-3">
        <img :src="book.fields.cover" alt="cover" class="img-fluid rounded shadow" />
      </div>

      <!-- 책 설명 -->
      <div class="col-md-9">
        <p class="mb-3"><strong>설명:</strong><br />{{ book.fields.description }}</p>
        <p><strong>출판사:</strong> {{ book.fields.publisher }}</p>
        <p><strong>출간일:</strong> {{ book.fields.pub_date }}</p>
        <p><strong>ISBN:</strong> {{ book.fields.isbn }}</p>
        <p><strong>고객 리뷰 평점:</strong> {{ book.fields.customer_review_rank }}</p>
      </div>
    </div>

    <!-- 작가 정보 섹션 -->
    <div class="mt-5">
      <h4>작가 정보</h4>
      <div class="d-flex align-items-start gap-3 mt-3">
        <!-- 작가 이미지 -->
        <img :src="book.fields.author_photo" alt="author-img" class="author-img">
        
        <!-- 작가 이름 + 소개 텍스트 -->
        <div>
          <p class="fw-bold mb-1">{{ book.fields.author }}</p>
          <p class="text-secondary mb-0 text-wrap" style="max-width: 100%;">
           {{ book.fields.author_info }}
          </p>
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '@/stores/bookstore'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const bookStore = useBookStore()

const bookId = parseInt(route.params.bookId, 10)

const book = computed(() =>
  bookStore.books.find((b) => b.pk === bookId)
)

const goToThreadWrite = () => {
  router.push({ name: 'threadWrite', params: { bookId } })
}
</script>

<style scoped>
.author-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}
</style>
