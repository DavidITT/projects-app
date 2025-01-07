<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="subtitle" class="py-4">{{ subtitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input ref="inputRef" v-model="inputValue"
                 :placeholder="placeholder ?? 'Ingrese un valor'"
                 type="text" placeholder="Nombre del proyecto" class="input input-bordered input-primary w-full flex-1">
          <div class="flex justify-end mt-5 space-x-3">
            <button class="btn" @click="$emit('close')">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div v-if="open" class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen"></div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'

interface Props {
  open: boolean,
  placeholder?: string,
  title: string,
  subtitle?: string
}

const props = defineProps<Props>()

const emits = defineEmits<{
  close: [void],
  value: [text: string]
}>()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement>(null)

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus()
    return
  }

  emits('value', inputValue.value.trim())
  emits('close')
  inputValue.value = ''
}

watch(props, ({ open }) => {
  if (open) {
    inputRef.value?.focus()
  }
})

</script>

<style scoped>

</style>
