import { createRouter, createWebHistory } from 'vue-router';
import PostComponent from '../components/PostComponent.vue';
import TodosComponent from '../components/TodosComponent.vue';
import AlbumComponent from '../components/AlbumComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'PostComponent',
      component: PostComponent
    },
    {
      path: '/todos',
      name: 'TodosComponent',
      component: TodosComponent
    },
    {
      path: '/albums',
      name: 'AlbumComponent',
      component: AlbumComponent
    },
    {
      path: '/albums/:id',
      name: 'AlbumDetailComponent',
      component: AlbumComponent
    }
  ]
})

export default router
