import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  // },
  // {
  //     path: '/',
  //     component: () => import('layouts/MainLayout.vue'),
  //     children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  //   },
  { path: '/login', component: () => import('pages/LoginPage.vue') },
  { path: '/register', component: () => import('pages/RegisterPage.vue') },
  { path: '/home', component: () => import('pages/DashboardPage.vue') },
  { path: '/file-form', component: () => import('pages/FileFormPage.vue') },
  { path: '/files', component: () => import('pages/FilesGridPage.vue') },
  { path: '/folders', component: () => import('pages/FolderPage.vue') },
  { path: '/file/:id', component: () => import('pages/FileDetailPage.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
