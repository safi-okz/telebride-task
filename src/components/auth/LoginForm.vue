<template>
  <section class="flex flex-col items-center">
    <div class="">
      <h6 class="text-[26px] font-[500] !text-[#5d596d]">
        Welcome to MyTutorPod! 👋
      </h6>
      <p class="text-[15px] !text-[#817e8e]">
        Please sign in to your account and start the adventure
      </p>
      <form class="mt-[26px]">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-1 text-[14px] text-[#676376] font-medium dark:text-white"
            >Email or Username</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe"
            required
          />
        </div>
        <div class="mb-6">
          <div class="flex justify-between">
            <label
              for="password"
              class="block mb-1 text-[#676376] text-[14px] font-mediu dark:text-white"
              >Password</label
            >
            <router-link to="/" class="text-[#0166c0] text-[14px]"
              >Forgot Password?</router-link
            >
          </div>
          <input
            type="password"
            v-model="passowrd"
            id="password"
            placeholder=".............."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-[13px] text-[#676376] font-medium dark:text-gray-300"
            >Remember me</label
          >
        </div>
        <button
          @click.prevent="login"
          type="submit"
          class="text-white bg-[#0166c0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign in
        </button>
      </form>
      <p class="text-[15px] text-center mt-[16px]">
        <span class="text-[#676376]">New on our platform?</span>
        <router-link to="/" class="text-[#0166c0] ms-2"
          >Create an account</router-link
        >
      </p>
      <hr class="mt-[35px]" />
      <p class="text-center -mt-[13px] mx-auto !w-[50px] bg-white">or</p>
      <div class="flex justify-center gap-x-4 mt-[30px]">
        <button class="facebook_btn social_btn text-[#4267b2]">
          <i class="bx bxl-facebook bg-transparent"></i>
        </button>
        <button class="twitter_btn social_btn text-[#1da1f2]">
          <i class="bx bxl-twitter bg-transparent"></i>
        </button>
        <button class="google_btn social_btn text-[#db4437]">
          <i class="bx bxl-google bg-transparent"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

const email = ref("");
const passowrd = ref("");

const login = () => {
  authStore.loginAction(email.value, passowrd.value);

  email.value = '';
  passowrd.value = '';
};
</script>

<style scoped>
.social_btn {
  padding: 11px 15.3px 11px 15.3px;
  border-radius: 6px;
}
.facebook_btn {
  background-color: rgba(66, 103, 178, 0.16);
}

.twitter_btn {
  background-color: rgba(29, 161, 242, 0.16);
}

.google_btn {
  background-color: rgba(219, 68, 55, 0.16);
}
</style>
