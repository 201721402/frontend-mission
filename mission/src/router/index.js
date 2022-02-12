import { createRouter, createWebHistory } from 'vue-router';
import itemRoute from '@/router/item';
import basicRoute from '@/router/basic';

const finalRoute = [].concat(basicRoute, itemRoute);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: finalRoute,
});

export default router;
