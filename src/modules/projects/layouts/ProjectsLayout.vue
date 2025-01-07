<template>
  <div class="h-screen antialiased bg-gray-100">
    <!-- Backdrop -->
    <Backdrop />
    <!-- Side Menu -->
    <SideMenu />
    <!-- End Side Menu -->
    <main class="w-screen">
      <!-- Navbar -->
      <Navbar />

      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">

import Backdrop from '@/modules/common/components/Backdrop.vue'
import SideMenu from '@/modules/common/components/SideMenu.vue'
import Navbar from '@/modules/common/components/Navbar.vue'

</script>

<style scoped>

</style>
