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
      name: 'book',
      component: BooksListView
    },
    {
      path: '/books/:bookID',
      name: 'bookDetail',
      component: BookDetailView
    },

        {
      path: '/threads',
      name: 'threadlistview',
      component: ThreadsListView    
    },
    {
      path: '/threads/:threadid',
      name: 'book',
      component: ThreadDetailView
    },
    {
      path: '/books/:bookid/write',
      name: 'threadwriteview',
      component: ThreadWriteView
    },
  ],
})

export default router
