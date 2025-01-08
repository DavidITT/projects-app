<template>
  <div class="h-screen antialiased">
    <!-- Backdrop -->
    <Backdrop />
    <!-- Side Menu -->
    <SideMenu />
    <!-- End Side Menu -->
    <main class="w-full bg-gray-100">
      <!-- Navbar -->
      <Navbar />

      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">

import Backdrop from '@/modules/common/components/BackdropComponent.vue'
import SideMenu from '@/modules/common/components/SideMenu.vue'
import Navbar from '@/modules/common/components/NavbarComponent.vue'

</script>

<style scoped>

</style>
