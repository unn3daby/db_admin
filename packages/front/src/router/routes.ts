import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/brokers', component: () => import('pages/BrokersPage.vue') },
      {
        path: '/brokers-account',
        component: () => import('pages/BrokerAccountPage.vue'),
      },
      {
        path: '/companies',
        component: () => import('pages/CompaniesPage.vue'),
      },
      {
        path: '/stocks',
        component: () => import('pages/StocksPage.vue'),
      },
      {
        path: '/funds',
        component: () => import('pages/FundsPage.vue'),
      },
      {
        path: '/funds-accounts',
        component: () => import('pages/FundsAccountsPage.vue'),
      },
      {
        path: '/obligations',
        component: () => import('pages/ObligationsPage.vue'),
      },
      {
        path: '/payers',
        component: () => import('pages/PayersPage.vue'),
      },
      {
        path: '/physical-persons',
        component: () => import('pages/PhysicalPersonPage.vue'),
      },
      {
        path: '/broker-accounts-physical',
        component: () => import('pages/PhysicalBrokeragePage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('pages/AuthPage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
