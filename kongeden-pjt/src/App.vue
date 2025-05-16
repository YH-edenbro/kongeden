<template>
   <!-- 헤더 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a class="navbar-brand fw-bold" href="#">
        <span style="color: red">Th</span>Read
      </a>
      <div class="ms-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink :to="{ name : 'thread' }">스레드</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">도서 검색</a>
          </li>
        </ul>
      </div>
    </nav>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
</script>

<style scoped>

</style>