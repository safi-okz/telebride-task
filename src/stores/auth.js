import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router/index';
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ /* options */ });

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    token: ''
  }),
  getters: {

  },
  actions: {
    async loginAction(email, password) {
        try{
          const response = await axios.get(`https://mytutorpod.org/v1/wmp/api/login2?username=${email}&password=${password}`);
          console.log(response.data);
          this.user = await response.data.record[0];
          this.token = await response.data.token;

          router.replace('/dashboard');

          await toaster.success(`Login successfully`, {
            position: "top",
            duration: 2000
        });

        } catch(error) {
          await toaster.error(`Email or password incorrect`, {
            position: "top",
            duration: 2000
        });
          console.log('Login error ', error.message);
        }
    },
    logoutAction() {
      this.user = '';
      this.token = ''
      router.replace('/')
    }
  },
  persist: {
    enabled: true
  }
})