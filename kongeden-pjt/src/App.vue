<template>
  <div>
    <!-- 헤더 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a class="navbar-brand fw-bold" href="#">
        <span style="color: red">Th</span>Read
      </a>
      <div class="ms-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to:="">스레드</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">도서 검색</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 배경 이미지와 중앙 텍스트 -->
    <div
      class="bg-image text-white d-flex flex-column justify-content-center align-items-center text-center"
      style="background-image: url('/library-background.jpg'); height: 50vh; background-size: cover; background-position: center;"
    >
      <h1 class="display-5 fw-bold">AI 기반 도서 추천 커뮤니티 서비스</h1>
      <h2 class="fs-2 mt-3">ThRead</h2>
    </div>

    <!-- 베스트셀러 섹션 -->
    <div class="container py-5">
      <h3 class="fw-bold mb-4">베스트셀러</h3>
      <div id="bookCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(group, index) in bookGroups"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <div class="d-flex justify-content-center gap-4">
              <div
                v-for="book in group"
                :key="book.title"
                class="text-center"
                style="width: 150px;"
              >
                <img
                  :src="book.img"
                  class="d-block w-100 rounded shadow"
                  alt="book cover"
                />
                <p class="mt-2">{{ book.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 캐러셀 버튼 -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const books = [
  { title: '소년이 온다', img: '/books/book1.jpg' },
  { title: '책벌레의 하극상', img: '/books/book2.jpg' },
  { title: '자축묘진뱀 (파랑새문고)', img: '/books/book3.jpg' },
  { title: '힘', img: '/books/book4.jpg' },
  { title: '새', img: '/books/book5.jpg' },
]

const groupSize = 3
const bookGroups = computed(() => {
  const groups = []
  for (let i = 0; i < books.length; i += groupSize) {
    groups.push(books.slice(i, i + groupSize))
  }
  return groups
})
</script>

<style scoped>
/* 캐러셀 양 옆 버튼 커스터마이징 필요 시 */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
</style>
