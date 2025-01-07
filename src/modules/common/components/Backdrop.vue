<template>
  <!-- Backdrop -->
  <div v-if="uiStore.isSidebarOpen" @click="uiStore.toggleSidebar()" class="backdrop"></div>
</template>

<script setup lang="ts">

import { useUiStore } from '@/modules/common/stores/ui.store.ts'

const uiStore = useUiStore()

</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(201, 201, 201, 0.5);
}
</style>
