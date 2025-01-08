<template>
  <button @click="uiStore.toggleModal(true)"
          class="bg-[#1495CE]/50 hover:bg-[#1495CE] text-white px-4 rounded-md btn-sm"
  >
    + New Project
  </button>
</template>

<script setup lang="ts">
import { useUiStore } from '@/modules/common/stores/ui.store.ts'

const uiStore = useUiStore()
</script>

<style scoped>

</style>
