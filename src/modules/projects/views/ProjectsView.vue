<template>
  <div class="overflow-x-auto w-full p-2 lg:p-10">
    <!-- Content -->
    <div class="flex-1 px-2 sm:px-0">
      <div class="flex justify-between items-center">
        <h3 class="text-3xl font-bold font-mono text-[#1495CE]">Projects</h3>
        <div class="inline-flex items-center space-x-2">
          <a
            class="bg-white text-gray-400 border border-gray-200 p-2 rounded-md hover:text-white hover:bg-[#1495CE] smooth-hover transition-colors"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </a>
          <a
            class="bg-white text-gray-400 border border-gray-200 p-2 rounded-md hover:text-white hover:bg-[#1495CE] smooth-hover transition-colors"
            href="#">
            <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20 7L4 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M15 12L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M9 17H4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <!-- New Project -->
      <div class="mb-10 sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div @click="modalOpen = true"
          class="group bg-gray-200 py-10 md flex flex-col justify-center items-center space-y-2 cursor-pointer rounded-md hover:bg-gray-600/40 hover:smooth-hover">
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
                    class="relative border-[#CBD2D9] border group bg-[#F5F7FA] p-6 flex flex-col space-y-4 items-center cursor-pointer rounded-lg hover:bg-[#3A78B6] hover:shadow-lg transition-all duration-300">

          <div class="w-24 h-24">
            <img class="w-full h-full object-cover object-center rounded-full shadow-md"
                 src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                 alt="Project Image" />
          </div>
          <h4
            class="text-gray-500 uppercase text-xl font-semibold text-center group-hover:text-gray-100 transition-colors duration-300">
            {{ project.name }}
          </h4>
          <p class="text-gray-400 text-sm group-hover:text-gray-200">
            {{ project.taskCount }} tasks remaining
          </p>
          <div class="w-full flex flex-col justify-items-end">
            <progress class="progress bg-gray-300 w-full lg:w-100 hover:text-white" :value="project.completion" max="100"></progress>
            <span class="text-end group-hover:text-white">{{ project.completion }}% completed</span>
          </div>
        </RouterLink>


      </div>
    </div>
  </div>

  <InputModal :open="modalOpen"
              title="Nuevo Proyecto"
              subtitle="Ingrese la información para crear un nuevo proyecto"
              placeholder="Ingresa un proyecto"
              @close="modalOpen = false"
              @value="projectsStore.addProject" />
</template>

<script setup lang="ts">
import InputModal from '@/modules/common/components/InputModal.vue'
import { ref } from 'vue'
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'

const modalOpen = ref(false)

const projectsStore = useProjectsStore()

</script>

<style scoped>
.table :where(thead tr, tbody tr:not(:last-child), tbody tr:first-child:last-child) {
  --tw-border-opacity: 1;
  border-bottom-color: lightgrey;
}
</style>
