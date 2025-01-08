<template>
  <div class="navbar bg-white">
    <div class="flex-1">
      <RouterLink to="/">
        <img src="@/assets/img/logo.png" class="w-30 h-10" alt="logo-app">
        <span class="sr-only">Logo image</span>
      </RouterLink>
    </div>
    <div class="flex-none">
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

const uiStore = useUiStore()
</script>

<style scoped>

</style>
