<template>
  <div class="h-screen flex flex-col justify-center items-center space-y-10">
    <h1 class="font-bold text-5xl">404 - Page Not Found</h1>
    <p class="font-medium text-ñg">Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.</p>
    <router-link to="/" class="link text-blue-500 text-lg">Go back to Home</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFound',
};
</script>

<style scoped>
</style>
