<template>
  <section class="flex justify-between items-center px-5 py-3 bg-white">
    <div class="flex gap-x-2 items-center">
      <img
        src="../../../assets/images/vuexy-logo@3x.png"
        class="h-[24px] w-[34px]"
        alt=""
      />
      <h5 class="text-[22px] font-bold text-[#5d586c]">MyToutorPod</h5>
    </div>
    <div class="flex gap-x-4 items-center">
      <img
        src="../../../assets/images/Flag.webp"
        class="rounded-full w-[26px] h-[26px] cursor-pointer"
        alt=""
      />
      <img
        src="../../../assets/images/moon-stars@3x.png"
        class="cursor-pointer w-[26px] h-[26px]"
        alt=""
      />
      <i class="bx bx-customize cursor-pointer text-[26px]"></i>

      <v-badge content="2" color="error">
        <i class="bx bx-bell cursor-pointer text-[26px]"></i>
      </v-badge>
      <div class="relative">
        <img
          class="w-[26px] h-[26px] rounded-full cursor-pointer"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          src="../../../assets/images/Profile-Picture.webp"
          alt=""
        />
        <span
          class="bottom-0 left-5 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
        ></span>
      </div>

      <div
        id="userDropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{{ user.employeename }}</div>
          <div class="font-medium truncate">{{ user.email }}</div>
          <div>{{ user.address }}</div>
        </div>
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Earnings</a
            >
          </li>
        </ul>
        <div class="py-1">
          <a
            href="#"
            @click="authStore.logoutAction()"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../../stores/auth";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<style scoped>
.bx {
  color: #5d586c;
}
</style>
