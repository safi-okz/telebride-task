<template>
    <div class="flex flex-row w-full items-center bg-white">
        <div class="basis-1/2">
            <img src="../assets/images/loginImg.png" alt="">
        </div>
        <div class="basis-1/2 !bg-white">
            <LoginForm />
        </div>
    </div>
</template>

<script setup>
import LoginForm from '../components/auth/LoginForm.vue';
</script>