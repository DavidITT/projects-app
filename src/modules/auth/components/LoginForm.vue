<template>
  <form class="mt-8 space-y-4">
    <label class="input input-bordered flex items-center">
      <input type="text" class="grow text-sm" placeholder="Email" v-model="email" />
      <svg fill="currentColor" class="w-4 h-4 text-gray-500 dark:text-slate-400" viewBox="0 0 1920 1920"
           xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
            fill-rule="evenodd"></path>
        </g>
      </svg>
    </label>

    <label class="input input-bordered flex items-center">
      <input type="password" class="grow text-sm" placeholder="Password" v-model="password" />
      <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-500 dark:text-slate-400" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
            stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="#1C274C" stroke-width="1.5"></path>
        </g>
      </svg>
    </label>

    <div v-if="authStore.errors" class="text-red-700d">
      {{ authStore.errors }}
    </div>

    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox"
               class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
        <label for="remember-me" class="ml-3 block text-sm text-gray-800">
          Remember me
        </label>
      </div>
      <div class="text-sm">
        <a href="#" class="text-blue-600 hover:underline font-semibold">
          Forgot your password?
        </a>
      </div>
    </div>

    <div class="!mt-8">
      <button type="button" @click="login"
              class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
        Sign in
      </button>
    </div>
    <p class="text-gray-800 dark:text-slate-400 text-sm !mt-8 text-center">Don't have an account?
      <RouterLink :to="{name:'register'}"
                  class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register
        here
      </RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts'

const authStore = useAuthStore()

const email = ref<string>('')
const password = ref<string>('')

const login = () => {
  authStore.login(email.value, password.value)
}

</script>

<style scoped>

</style>
