<template>
  <div class="overflow-x-auto w-full p-10">
    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Proyecto</th>
        <th>Tareas</th>
        <th>Avance</th>
      </tr>
      </thead>
      <tbody>
      <tr class="hover" v-for="(project, index) in projectsStore.projectsWithCompletion" :key="project.id">
        <th>{{ index + 1 }}</th>
        <td>{{ project.name }}</td>
        <td>{{ project.taskCount }}</td>
        <td class="space-x-2">
          <progress class="progress w-56" :value="project.completion" max="100"></progress>
          <span>{{project.completion}}%</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <InputModal :open="modalOpen"
              title="Nuevo Proyecto"
              subtitle="Ingrese la información para crear un nuevo proyecto"
              placeholder="Ingresa un proyecto"
              @close="modalOpen = false"
              @value="projectsStore.addProject" />

  <CustomModal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titulo del modal</h1>
    </template>
    <template #body>
      <p>Body</p>
    </template>
    <template #footer>
      <div class="flex justify-end mt-5 space-x-3">
        <button @click="customModalOpen = false" class="btn">Close</button>
        <button class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </CustomModal>

  <FabButton :position="'bottom-right'" @click="modalOpen = true">
    <AddCircle />
  </FabButton>

  <FabButton :position="'bottom-left'" @click="customModalOpen = true">
    <ModalIcon />
  </FabButton>

</template>

<script setup lang="ts">
import FabButton from '@/modules/common/components/FabButton.vue'
import AddCircle from '@/modules/common/icons/AddCircle.vue'
import InputModal from '@/modules/common/components/InputModal.vue'
import { ref } from 'vue'
import CustomModal from '@/modules/common/components/CustomModal.vue'
import ModalIcon from '@/modules/common/icons/ModalIcon.vue'
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'

const modalOpen = ref(false)
const customModalOpen = ref(false)

const projectsStore = useProjectsStore()

</script>

<style scoped>

</style>
