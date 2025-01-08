<template>
  <dialog class="modal" :open="uiStore.createProject">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Nuevo proyecto</h3>
      <p class="pt-4 pb-">Ingresa el nombre del proyecto </p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input ref="inputRef" v-model="inputValue"
                 placeholder="Nombre del proyecto"
                 type="text" class="input input-bordered input-primary w-full flex-1">
          <div class="flex justify-end mt-5 space-x-3">
            <button class="btn" @click="uiStore.toggleModal(false)">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div v-if="uiStore.createProject" class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen"></div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'
import { useUiStore } from '@/modules/common/stores/ui.store.ts'
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'

const uiStore = useUiStore()
const projectstore = useProjectsStore()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)


const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus()
    return
  }

  projectstore.addProject(inputValue.value)
  uiStore.toggleModal(false)
  inputValue.value = ''
}

watch(
  () => uiStore.createProject,
  (newVal) => {
    if (newVal) {
      inputRef.value?.focus()
    }
  }
)

</script>

<style scoped>

</style>
