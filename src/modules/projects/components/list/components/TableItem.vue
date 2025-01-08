<template>
  <tr v-for="project in projectsStore.projectsWithCompletion"
      :key="project.id"
      class="border-b border-border text-gray-400 hover:bg-gray-100 hover:text-gray-700"
  >
    <td class="py-2 px-4 hover:link text-blue-500 hover:text-blue-800 cursor-pointer">
      <div class="flex flex-row">
        <Directory />
        <RouterLink :to="`/project/${project.id}`" class="capitalize">
          {{ project.name }}
        </RouterLink>
      </div>
    </td>
    <td class="py-2 px-4 text-center">{{ project.taskCount }}</td>
    <td class="py-2 px-4 text-center">{{ project.completion }} %</td>
    <td class="py-2 px-4">
      <span></span>
    </td>
    <td class="py-2 px-4 hidden md:table-cell"></td>
    <td class="py-2 px-4">
      <button class="btn bg-white btn-sm p-1 border-gray-300 hover:bg-[#1495CE] hover:text-white hover:border-0">
        <Options />
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'
import Directory from '@/modules/common/icons/Directory.vue'
import Options from '@/modules/common/icons/Options.vue'

const projectsStore = useProjectsStore()
</script>

<style scoped>

</style>
