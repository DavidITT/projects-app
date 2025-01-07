<template>
  <aside class="custom-aside bg-base-200 w-72">
    <RouterLink to="/" >
      <h2 class="text-lg font-bold mx-4">Proyectos</h2>
    </RouterLink>

    <p v-if="!projectsStore.existProjects" class="text-sm text-gray-500 mx-4">No hay proyectos</p>
    <ul v-else class="menu rounded-box w-full">
      <li v-for="project in projectsStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details>
            <summary>
              <RouterLink :to="`/project/${project.id}`">
                {{ project.name }}
              </RouterLink>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>
              </li>
            </ul>
          </details>
        </template>
        <template v-else>
          <RouterLink :to="`/project/${project.id}`">
            {{ project.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">

import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'

const projectsStore = useProjectsStore()

</script>

<style scoped>
.custom-aside {
  min-height: calc(100vh - 60px);
}
</style>
