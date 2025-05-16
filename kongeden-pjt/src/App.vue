<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <RouterLink :to="{ name: 'main' }" class="navbar-brand fw-bold">
      <span style="color: red">Th</span>Read
    </RouterLink>
    <div class="ms-auto">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink
            :to="{ name: 'thread' }"
            class="nav-link custom-thread-link"
          >
            스레드
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'book'}" class="nav-link custom-thread-link">도서 검색</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
.custom-thread-link {
  color: gray;
  text-decoration: none;
}

.custom-thread-link:hover {
  text-decoration: underline;
  color: white;
}

/* 현재 경로가 일치할 때만 붉은색 */
.router-link-active.custom-thread-link {
  color: red;
  font-weight: bold;
}
</style>
