<template>
  <div class="navbar bg-white">
    <div class="flex-1">
      <RouterLink to="/">
        <img src="@/assets/img/logo.png" class="w-30 h-10" alt="logo-app">
        <span class="sr-only">Logo image</span>
      </RouterLink>
    </div>
    <div class="flex-none">
      <div class="flex space-x-4 items-center">
        <RouterLink v-if="!authStore.isAuthenticated" to="/sign-in" class="text-gray-800 text-sm">Sing In</RouterLink>
        <RouterLink v-if="!authStore.isAuthenticated" to="/register" class="bg-[#1495CE]/80 px-4 py-2 rounded text-white hover:bg-[#1495CE] text-sm">Sing Up</RouterLink>
      </div>
      <button class="btn btn-square btn-ghost" @click="uiStore.toggleSidebar()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-7 w-7 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <span class="sr-only">Open menu</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUiStore } from '@/modules/common/stores/ui.store.ts'
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts'

const uiStore = useUiStore()
const authStore = useAuthStore()
</script>

<style scoped>

</style>
