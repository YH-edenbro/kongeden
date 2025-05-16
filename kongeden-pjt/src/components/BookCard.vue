<template>
  <div class="col">
    <div
      class="card h-100 hover-shadow cursor-pointer"
      @click="goToDetail"
    >
      <img :src="book.fields.cover" class="card-img-top" :alt="book.fields.title">
      <div class="card-body">
        <h5 class="card-title">{{ book.fields.title }}</h5>
        <p class="card-text text-truncate">{{ book.fields.description }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">저자: {{ book.fields.author }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  book: Object
})

const router = useRouter()
const goToDetail = () => {
  router.push({ name: 'bookDetail', params: { bookId: props.book.pk } })
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.hover-shadow:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
}
</style>
