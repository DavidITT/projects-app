<template>
  <template v-if="projectsStore.projectsWithCompletion.length > 0">
    <tr v-for="project in projectsStore.projectsWithCompletion"
        :key="project.id"
        class="border-b border-border text-gray-400 hover:bg-gray-100 hover:text-gray-700"
    >
      <td class="py-2 px-4 hover:link text-blue-500 hover:text-blue-800 cursor-pointer">
        <div class="flex flex-row">
          <Directory />
          <RouterLink :to="`/project/${project.id}`" class="capitalize">
            {{ shouldShorten ? shortText(project.name) : project.name }}
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
  <template v-else>
    <tr class="text-center">
      <td colspan="5">
        <span>No projects yet</span>
      </td>
    </tr>
  </template>

</template>

<script setup lang="ts">
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'
import Directory from '@/modules/common/icons/DirectoryIcon.vue'
import Options from '@/modules/common/icons/OptionsIcon.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { shortText } from '@/modules/common/helpers/shortText.ts'

const projectsStore = useProjectsStore()
const shouldShorten = ref<boolean>(false)

const handleResize = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
   window.innerWidth <= 768 ? shouldShorten.value = true : shouldShorten.value = false
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>

</style>
