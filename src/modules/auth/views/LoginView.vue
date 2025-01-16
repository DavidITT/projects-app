<template>
  <div class="bg-gray-50 dark:bg-gray-900 font-[sans-serif]">
    <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div class="max-w-md w-full">
        <RouterLink :to="{name:'home'}">
          <img
            src="@/assets/img/logo.png" alt="logo" class='w-60 mb-8 mx-auto block' />
        </RouterLink>

        <div class="p-8 rounded-2xl bg-slate-100 dark:bg-gray-800 shadow">
          <h2 class="text-blue-500 text-center text-3xl font-bold mb-4">Sign in</h2>

          <LoginWithGoogle></LoginWithGoogle>

          <Divider></Divider>

          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginWithGoogle from '@/modules/auth/components/LoginWithGoogle.vue'
import Divider from '@/modules/auth/components/Divider.vue'
import LoginForm from '@/modules/auth/components/LoginForm.vue'
</script>
