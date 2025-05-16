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
        <img :src="book.img" alt="book cover" style="height: 100px;" class="me-3" />
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const bookId = route.params.bookId

// 예시 도서 정보 (실제 프로젝트에선 API 호출 또는 props 사용)
const book = ref({
  id: bookId,
  title: '호밀밭의 파수꾼',
  author: '제롬 데이비드 샐린저',
  img: '/books/book1.jpg'
})

const title = ref('')
const content = ref('')

function submitThread() {
  if (!title.value || !content.value) {
    alert('제목과 내용을 입력해주세요.')
    return
  }

  // 여기서 API 요청 등으로 thread 저장 가능
  console.log('제출된 스레드:', {
    title: title.value,
    content: content.value,
    bookId: book.value.id
  })

  // 완료 후 페이지 이동
  router.push('/threads')
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
