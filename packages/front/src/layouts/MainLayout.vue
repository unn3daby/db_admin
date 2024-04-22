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
    icon: 'mdi-iobroker',
  },
  {
    title: 'Компании',
    caption: 'CRUD',
    icon: 'mdi-domain',
  },
  {
    title: 'Акции',
    caption: 'CRUD',
    icon: 'mdi-chart-areaspline',
  },
  {
    title: 'Фонды',
    caption: 'CRUD',
    icon: 'mdi-cash-refund',
  },
  {
    title: 'Счета Фондов',
    caption: 'CRUD',
    icon: 'mdi-cash-refund',
  },
  {
    title: 'Облигации',
    caption: 'CRUD',
    icon: 'mdi-note-text-outline',
  },
  {
    title: 'Плательщики',
    caption: 'CRUD',
    icon: 'mdi-cash-sync',
  },
  {
    title: 'Физ. Лицо',
    caption: 'CRUD',
    icon: 'mdi-account-box-outline',
  },
  {
    title: 'Брокерский Аккаунт Физ. Лица',
    caption: 'CRUD',
    icon: 'mdi-account-credit-card-outline',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
