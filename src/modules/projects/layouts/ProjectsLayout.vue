<template>
  <div class="flex flex-col">
    <TopMenu />
    <main class="flex flex-row">
      <!-- side Menu -->
      <SideMenu />
      <router-view />
    </main>
  </div>
</template>


<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue'
import SideMenu from '@/modules/projects/components/SideMenu.vue'
</script>

<style scoped>

</style>
