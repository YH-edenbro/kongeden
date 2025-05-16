import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import BooksListView from '@/views/BooksListView.vue'
import BookDetailView from '@/views/BookDetailView.vue'
import ThreadList from '@/components/ThreadList.vue' 
import ThreadDetailView from '@/views/ThreadDetailView.vue'
import ThreadWriteView from '@/views/ThreadWriteView.vue'

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
        { path: '', name: 'book', component:BooksListView},
        { path: '/:bookID', name: 'bookDetail', component:BookDetailView},
      ]
    },
    {
      path: '/threads',
      component: ThreadList,
      children: [
        {path: '', name: 'thread', component:ThreadList},
        {path: '/:threadId', name: 'threadDetail', component: ThreadDetailView},
        {path: '/:bookId/write', name: 'threadWrite', component: ThreadWriteView}
      ]
    }
  ],
})

export default router
