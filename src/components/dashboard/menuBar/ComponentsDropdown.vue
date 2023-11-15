<template>
  <div class="ms-4">
    <button
      id="componentsDropdownButton"
      data-dropdown-toggle="components-dropdown"
      class="text-[#ffffff1a] bg-[#f8f8f8] focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-auto"
      type="button"
    >
      <i class="bx bx-toggle-right me-2 text-[19px]"></i>
      <span>Components</span>
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      id="components-dropdown"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="componentsDropdownButton"
      >
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Horizontal layout</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Vertical layout</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Bottom layout</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initDropdowns } from "flowbite";

onMounted(() => {
  initDropdowns();
});
</script>
