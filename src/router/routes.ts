import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/RegisterPage.vue'),
  },
  {
    path: '/',
    component: MainLayout, // Este layout envuelve las siguientes rutas
    children: [
      { path: 'home', component: () => import('pages/DashboardPage.vue') },
      { path: 'file-form', component: () => import('pages/FileFormPage.vue') },
      { path: 'files', component: () => import('pages/FilesGridPage.vue') },
      { path: 'folders', component: () => import('pages/FolderPage.vue') },
      { path: 'file/:id', component: () => import('pages/FileDetailPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
