import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import BooksListView from '@/views/BooksListView.vue'
import BookDetailView from '@/views/BookDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: LandingView    
    },
    {
      path: '/books',
      component: BooksList,
      children: [
        { path: '', name: 'book', component:BooksListView}
      ]
    },
    {
      path: '/books/:bookID',
      name: 'bookDetail',
      component: BookDetailView
    },
  ],
})

export default router
