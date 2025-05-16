<template>
  <div class="book-card d-flex text-light" @click="goToDetail">
    <div class="book-info flex-grow-1">
      <h5 class="title mb-1">{{ book.fields.title }}</h5>
      <p class="meta mb-1">
        {{ book.fields.author }} | {{ book.fields.pub_date }}
      </p>
      <p class="award">{{ book.fields.subTitle }}</p>
    </div>
    <div class="book-cover">
      <img
        :src="book.fields.cover"
        :alt="book.fields.title"
        class="img-thumbnail shadow"
      />
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
.book-card {
  background-color: #8d8888;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-card:hover {
  background-color: #2a2a2a;
}

.book-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-weight: bold;
  font-size: 1.1rem;
  color: #ffffff;
}

.meta {
  color: #dfd9d9;
  font-size: 0.9rem;
}

.award {
  color: #c7c2c2;
  font-size: 0.85rem;
}

.book-cover img {
  width: 80px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}
</style>
