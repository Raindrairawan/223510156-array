import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../components/Todos.vue';
import Posts from '../components/Posts.vue';

const routes = [
  { path: '/todos', component: Todos },
  { path: '/posts', component: Posts }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

