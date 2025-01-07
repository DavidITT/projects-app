<template>
  <aside>
    <!--    <div class="flex-1 space-y-10">-->
    <!--      <RouterLink to="/" class="text-lg font-bold text-blue-600 ml-3">My Project App</RouterLink>-->
    <!--      <RouterLink to="/" >-->
    <!--        <h2 class="text-lg font-bold mx-4">Proyectos</h2>-->
    <!--        <div class="flex-none">-->
    <!--          <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button">-->
    <!--            <svg-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              fill="none"-->
    <!--              viewBox="0 0 24 24"-->
    <!--              class="inline-block h-5 w-5 stroke-current">-->
    <!--              <path-->
    <!--                stroke-linecap="round"-->
    <!--                stroke-linejoin="round"-->
    <!--                stroke-width="2"-->
    <!--                d="M4 6h16M4 12h16M4 18h16"></path>-->
    <!--            </svg>-->
    <!--          </label>-->
    <!--        </div>-->
    <!--      </RouterLink>-->
    <!--    </div>-->

    <!--    <p v-if="!projectsStore.existProjects" class="text-sm text-gray-500 mx-4">No hay proyectos</p>-->
    <!--    <ul v-else class="menu rounded-box w-full">-->
    <!--      <li v-for="project in projectsStore.projectList" :key="project.id">-->
    <!--        <template v-if="project.tasks.length > 0">-->
    <!--          <details>-->
    <!--            <summary>-->
    <!--              <RouterLink :to="`/project/${project.id}`">-->
    <!--                {{ project.name }}-->
    <!--              </RouterLink>-->
    <!--            </summary>-->
    <!--            <ul>-->
    <!--              <li v-for="task in project.tasks" :key="task.id">-->
    <!--                <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>-->
    <!--              </li>-->
    <!--            </ul>-->
    <!--          </details>-->
    <!--        </template>-->
    <!--        <template v-else>-->
    <!--          <RouterLink :to="`/project/${project.id}`">-->
    <!--            {{ project.name }}-->
    <!--          </RouterLink>-->
    <!--        </template>-->
    <!--      </li>-->
    <!--    </ul>-->

    <transition name="sidebar">
      <div
        v-if="uiStore.isSidebarOpen"
        class="fixed inset-y-0 z-10 flex w-80"
      >
        <div class="absolute inset-0 w-full h-full text-white bg-white"></div>
        <!-- Sidebar content -->
        <div class="z-10 flex flex-col flex-1">
          <div class="flex items-center justify-between flex-shrink-0 w-100 p-4">
            <!-- Logo -->
            <RouterLink to="/">
              <img src="../../../assets/img/logo.png" class="w-30 h-10" alt="logo-app">
              <span class="sr-only">Logo image</span>
            </RouterLink>
            <!-- Close btn -->
            <button @click="uiStore.toggleSidebar()" class="p-1 rounded-lg">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="sr-only">Close sidebar</span>
            </button>
          </div>
          <nav class="flex flex-col flex-1 w-64 p-4 mt-4 space-y-5">
            <RouterLink :to="{name:'home'}" class="flex items-center space-x-2">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </RouterLink>

            <RouterLink :to="{name:'projects'}" class="flex items-center space-x-2">

              <svg  class="w-6 h-6" stroke-width="4" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentcolor">
                <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </g>
              </svg>
              <span>Projects</span>
            </RouterLink>
          </nav>
          <div class="flex-shrink-0 p-4">
            <button class="flex items-center space-x-2">
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </aside>
</template>

<script setup lang="ts">

// import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'
//
// const projectsStore = useProjectsStore()

import { useUiStore } from '@/modules/common/stores/ui.store.ts'

const uiStore = useUiStore()

</script>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s;
}

.sidebar-enter {
  transform: translateX(-100%);
}

.sidebar-leave-to {
  transform: translateX(-100%);
}
</style>
