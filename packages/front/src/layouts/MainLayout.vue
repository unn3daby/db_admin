<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> DB Admin </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Ссылки на таблицы </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout',
});

const linksList: EssentialLinkProps[] = [
  {
    title: 'Брокеры',
    caption: 'CRUD',
    to: { path: '/brokers' },
    icon: 'mdi-iobroker',
  },
  {
    title: 'Аккаунты брокеров',
    caption: 'CRUD',
    to: { path: '/brokers-account' },
    icon: 'mdi-iobroker',
  },
  {
    title: 'Компании',
    caption: 'CRUD',
    to: { path: '/companies' },
    icon: 'mdi-domain',
  },
  {
    title: 'Акции',
    caption: 'CRUD',
    to: { path: '/stocks' },
    icon: 'mdi-chart-areaspline',
  },
  {
    title: 'Фонды',
    caption: 'CRUD',
    to: { path: '/funds' },
    icon: 'mdi-cash-refund',
  },
  {
    title: 'Счета Фондов',
    caption: 'CRUD',
    to: { path: '/funds-accounts' },
    icon: 'mdi-cash-refund',
  },
  {
    title: 'Облигации',
    caption: 'CRUD',
    to: { path: '/obligations' },
    icon: 'mdi-note-text-outline',
  },
  {
    title: 'Плательщики',
    caption: 'CRUD',
    to: { path: '/payers' },
    icon: 'mdi-cash-sync',
  },
  {
    title: 'Физ. Лицо',
    caption: 'CRUD',
    to: { path: '/physical-persons' },
    icon: 'mdi-account-box-outline',
  },
  {
    title: 'Брокерский Аккаунт Физ. Лица',
    caption: 'CRUD',
    to: { path: '/broker-accounts-physical' },
    icon: 'mdi-account-credit-card-outline',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
