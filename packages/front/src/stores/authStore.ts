import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: { id: null },
    message: '',
  }),
  actions: {
    async auth(payload: { username: string; password: string }) {
      try {
        const { data } = await axios.post(
          'http://localhost:8001/api/auth',
          payload,
        );
        console.log(data, 'data');
        this.user = data.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error?.response?.data?.error);
        }
      }
    },
    async reg(payload: { username: string; password: string }) {
      try {
        const { data } = await axios.post(
          'http://localhost:8001/api/reg',
          payload,
        );
        this.user = data.data;
      } catch (error) {
        if (error instanceof AxiosError)
          throw new Error(error?.response?.data?.error);
      }
    },
  },
});
