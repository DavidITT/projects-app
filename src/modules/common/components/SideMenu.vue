<template>
  <aside>
    <transition name="sidebar" mode="out-in">
      <div
        v-if="uiStore.isSidebarOpen"
        class="fixed inset-y-0 z-20 flex w-80"
      >
        <div class="absolute inset-0 w-full h-full text-white bg-white"></div>
        <!-- Sidebar content -->
        <div class="z-10 flex flex-col flex-1">
          <div class="flex items-center justify-between flex-shrink-0 w-100 p-4 border-b-2">
            <!-- Logo -->
            <RouterLink to="/">
              <img src="../../../assets/img/logo.png" class="w-30 h-10" alt="logo-app">
              <span class="sr-only">Logo image</span>
            </RouterLink>
            <!-- Close btn -->
            <button @click="uiStore.toggleSidebar()" class="p-1 rounded-lg">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="sr-only">Close sidebar</span>
            </button>
          </div>
          <nav class="flex flex-col flex-1 w-64 p-4 mt-4 space-y-5">
            <RouterLink :to="{name:'home'}" class="flex items-center space-x-2" @click="uiStore.toggleSidebar()">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </RouterLink>

            <RouterLink :to="{name:'projects'}" class="flex items-center space-x-2" @click="uiStore.toggleSidebar()">

              <svg class="w-6 h-6" stroke-width="4" aria-hidden="true" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg" fill="currentcolor">
                <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </g>
              </svg>
              <span>Projects</span>
            </RouterLink>
          </nav>
          <div class="flex-shrink-0 p-4 border-t-2">
            <div class="flex flex-row justify-between">
              <button class="flex items-center space-x-2"
                      v-if="authStore.isAuthenticated" @click="authStore.logout(); uiStore.toggleSidebar()"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </button>
              <div class="flex items-center">
                <svg viewBox="0 0 16 16" class="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                  id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g
                  id="SVGRepo_iconCarrier"> <path
                  d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                  fill="currentColor"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                                               fill="currentColor"></path> </g></svg>
                <span> {{ authStore.userName }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </aside>
</template>

<script setup lang="ts">

import { useUiStore } from '@/modules/common/stores/ui.store.ts'
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts'

const uiStore = useUiStore()
const authStore = useAuthStore()

</script>

<style scoped>

.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.sidebar-enter,
.sidebar-leave-to {
  transform: translateX(-100%);
}

.sidebar-enter-to,
.sidebar-leave {
  transform: translateX(0);
}
</style>
