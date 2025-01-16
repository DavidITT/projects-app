<template>
  <div class="flex items-center justify-center w-100">
    <button @click="authStore.signInWithGoogle"
            class="w-full px-4 py-2 border flex gap-2 items-center justify-center border-slate-500 rounded-lg text-gray-500 hover:bg-white dark:hover:bg-gray-900 hover:border-slate-700 hover:text-gray-500 hover:shadow transition duration-150 my-5">
      <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy"
           alt="google logo">
      <span>Login with Google</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts'

const authStore = useAuthStore()

</script>

<style scoped>

</style>
