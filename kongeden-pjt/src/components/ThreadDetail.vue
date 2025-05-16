<template>
  <div class="container my-5 text-white">
    <!-- 배너 -->
    <div class="banner position-relative text-center text-white">
      <img :src="book.fileds.cover" class="img-fluid w-100 banner-img" alt="Banner" />
      <h2 class="banner-title position-absolute top-50 start-50 translate-middle">
        {{ thread?.title }}
      </h2>
    </div>

    <div class="row mt-5">
      <!-- 책 정보 카드 -->
      <div class="col-md-3">
        <div class="card bg-dark text-white shadow">
          <img :src="book?.cover" class="card-img-top p-3" alt="Book Cover" />
          <div class="card-body">
            <h5 class="card-title">{{ book?.title }}</h5>
            <p class="card-text">작성일: {{ formattedDate }}</p>
          </div>
        </div>
      </div>

      <!-- 글 내용 -->
      <div class="col-md-9">
        <div class="content-box bg-dark p-4 rounded shadow">
          <p v-for="(para, idx) in thread?.content.split('\n')" :key="idx" class="mb-3">
            {{ para }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useThreadStore } from '@/stores/bookstore'
import { useBookStore } from '@/stores/bookstore' // ✅ 가정
import { computed } from 'vue'

const route = useRoute()
const threadStore = useThreadStore()
const bookStore = useBookStore()

const threadId = parseInt(route.params.threadId, 10)

const thread = computed(() =>
  threadStore.threads.find((t) => t.threadId === threadId)
)

// 책 정보 가져오기
const book = computed(() =>
  bookStore.books.find((b) => b.bookId === thread.value?.bookId)
)

// 날짜 형식 변환
const formattedDate = computed(() =>
  thread.value ? new Date(thread.value.createdAt).toLocaleDateString() : ''
)
</script>

<style scoped>
.banner-img {
  max-height: 300px;
  object-fit: cover;
  filter: brightness(60%);
}
.banner-title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
}

.content-box {
  line-height: 1.8;
  font-size: 1rem;
  white-space: pre-line;
}
</style>
