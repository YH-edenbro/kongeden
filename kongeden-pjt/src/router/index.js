import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import BookDetailView from '@/views/BookDetailView.vue'
import ThreadDetailView from '@/views/ThreadDetailView.vue'
import ThreadWriteView from '@/views/ThreadWriteView.vue'
import BooksListView from '@/views/BooksListView.vue'
import ThreadListView from '@/views/ThreadListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: LandingView    
    },
    {
      path: '/book',
      name: 'book',
      component: BooksListView,
      children: [
        { path: '/:bookID', name: 'bookDetail', component:BookDetailView},
      ]
    },
    {
      path: '/thread',
      name: 'thread',
      component: ThreadListView,
      children: [
        {path: '/:threadId', name: 'threadDetail', component: ThreadDetailView},
        {path: '/:bookId/write', name: 'threadWrite', component: ThreadWriteView}
      ]
    }
  ]
})

export default router
