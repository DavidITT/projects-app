<template>
  <div class="mb-10 sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- New Project -->
    <div @click="uiStore.toggleModal(true)"
         class="group bg-gray-200 py-10 flex-col justify-center items-center space-y-2 cursor-pointer rounded-md hover:bg-gray-600/40 hover:smooth-hover hidden md:flex">
      <button
        class="bg-gray-300 text-white group-hover:bg-gray-600/40 group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
      <span class="text-gray-400 group-hover:text-white group-hover:smooth-hover text-center font-stylish text-lg">
            Create new project
          </span>
    </div>
    <!-- List Projects -->
    <RouterLink :to="`/project/${project.id}`" v-for="project in projectsStore.projectsWithCompletion"
                :key="project.id"
                class="space-y-4 border-[#CBD2D9] border group bg-[#F5F7FA] flex flex-col p-5 items-center cursor-pointer rounded-lg hover:bg-[#3A78B6] hover:shadow-lg transition-all duration-300">

      <img class="object-cover object-center rounded-full shadow-md w-24 h-24"
           src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
           alt="Project Image" />
      <h4
        class="text-gray-500 capitalize text-xl font-semibold text-center group-hover:text-gray-100 transition-colors duration-300">
        {{ project.name }}
      </h4>
      <p class="text-gray-400 text-sm group-hover:text-gray-200">
        {{ project.taskCount }} tasks remaining
      </p>
      <div class="w-full flex flex-col justify-items-end">
        <progress class="progress bg-gray-300 w-full lg:w-100 hover:text-white" :value="project.completion"
                  max="100"></progress>
        <span class="text-end group-hover:text-white">{{ project.completion }}% completed</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'
import { useUiStore } from '@/modules/common/stores/ui.store.ts'

const projectsStore = useProjectsStore()
const uiStore = useUiStore()
</script>

<style scoped>

</style>
