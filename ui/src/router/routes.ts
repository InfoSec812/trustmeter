import { RouteConfig } from 'vue-router';
import Index from 'pages/Index.vue';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: MainLayout,
    props: true,
    children: [
      {
        name: 'index',
        path: ':id',
        component: Index
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
