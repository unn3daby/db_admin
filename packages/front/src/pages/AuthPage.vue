<template>
  <q-layout>
    <q-page-container>
      <q-page class="row items-center justify-center">
        <div class="form">
          <q-input
            class="q-mb-md"
            outlined
            dense
            label="Логин"
            v-model="authData.username"
          ></q-input>
          <q-input
            v-model="authData.password"
            class="q-mb-md"
            outlined
            dense
            label="Пароль"
            clearable
            type="password"
          ></q-input>
          <q-input
            v-if="showConfirmPassword"
            v-model="confirmPassword"
            class="q-mb-md"
            outlined
            dense
            label="Подтвердите пароль"
            clearable
            type="password"
          ></q-input>
          <div
            @click="toggleRegistration"
            class="flex justify-end q-mb-md link cursor-pointer"
          >
            {{ !showConfirmPassword ? 'Зарегистрироваться' : 'Войти' }}
          </div>
          <q-btn
            class="full-width"
            color="primary"
            @click="showConfirmPassword ? reg() : login()"
          >
            {{ showConfirmPassword ? 'Зарегистрироваться' : 'Войти' }}
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'src/stores/authStore';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const router = useRouter();

const authData = ref({
  username: '',
  password: '',
});
const confirmPassword = ref('');
const authStore = useAuthStore();
const showConfirmPassword = ref(false);
const $q = useQuasar();

const login = async () => {
  try {
    await authStore.auth(authData.value);
    router.push({ path: '/' });
  } catch (error) {
    $q.notify({ type: 'negative', message: 'Неверный логин или пароль' });
  }
};
const reg = async () => {
  try {
    await authStore.reg(authData.value);
    router.push({ path: '/' });
  } catch (error) {
    if (typeof error === 'string')
      $q.notify({
        type: 'negative',
        message: 'Такой пользователь уже существует',
      });
  }
};

const toggleRegistration = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};
</script>

<style scoped lang="scss">
.form {
  width: 300px;
}
.link {
  &:hover {
    color: $primary;
  }
}
</style>
