<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4 text-center">📘 새로운 스레드 작성</h2>

    <div class="mb-3">
      <label class="form-label">제목</label>
      <input v-model="title" type="text" class="form-control" placeholder="스레드 제목을 입력하세요" />
    </div>

    <div class="mb-3">
      <label class="form-label">내용</label>
      <textarea v-model="content" class="form-control" rows="6" placeholder="자유롭게 의견을 작성하세요."></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">참고 도서</label>
      <div class="card p-3 d-flex flex-row align-items-center">
        <img :src="book.cover" alt="book cover" style="height: 100px;" class="me-3" />
        <div>
          <h5>{{ book.title }}</h5>
          <p class="mb-0">{{ book.author }}</p>
        </div>
      </div>
    </div>

    <div class="text-end mt-4">
      <button class="btn btn-secondary me-2" @click="goBack">취소</button>
      <button class="btn btn-danger" @click="submitThread">작성</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '@/stores/bookstore' // 경로는 실제 프로젝트 구조에 맞게 조정

const route = useRoute()
const router = useRouter()
const bookStore = useBookStore()

const bookId = parseInt(route.params.bookId) // 문자열 → 숫자 변환 (store에서 비교 위해 필요할 수 있음)

const title = ref('')
const content = ref('')



// 1. 책 목록이 로드되지 않았을 수도 있으므로 mount 시 로드
onMounted(() => {
  if (bookStore.books.length === 0) {
    bookStore.loadBooks()
  }
})

// 2. bookId로 store에서 해당 도서 찾기
const book = computed(() => {
  return bookStore.books.find((b) => b.pk === bookId)?.fields || {
    title: '도서를 찾을 수 없습니다',
    author: '',
    cover: ''
  }
})
const cover = book.cover
import { useThreadStore } from '@/stores/bookstore' // 또는 '@/stores/thread' 경로

const threadStore = useThreadStore()

function submitThread() {
  if (!title.value || !content.value) {
    alert('제목과 내용을 입력해주세요.')
    return
  }


  // store 또는 다른 로직에 제출
  console.log('제출된 스레드:', {
    title: title.value,
    content: content.value,
    cover: cover,
    bookId: bookId
  })

      // ✅ store에 저장
  threadStore.addThread({
    title: title.value,
    content: content.value,
    bookId: bookId, // 참조 도서 정보
  })


  router.push(`/book/${bookId}`)
}

function goBack() {
  router.back()
}
</script>


<style scoped>
.card {
  background-color: #f8f9fa;
}
</style>
