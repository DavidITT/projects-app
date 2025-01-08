<template>
  <div class="overflow-x-auto w-full p-2 lg:p-10">
    <!-- Content -->
    <div class="flex-1 sm:px-0 px-2 my-5 md:mt-7 md:mb-8 lg:my-0">
      <div class="flex justify-between items-center">
        <h3 class="text-3xl font-bold font-mono text-[#1495CE]">Projects</h3>
        <div class="inline-flex items-center space-x-2">
          <span @click="uiStore.switchProjectsView('grid')"
            class="bg-white text-gray-400 border border-gray-200 p-2 rounded-md hover:text-white hover:bg-[#1495CE] smooth-hover transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </span>
          <span @click="uiStore.switchProjectsView('list')"
            class="bg-white text-gray-400 border border-gray-200 p-2 rounded-md hover:text-white hover:bg-[#1495CE] smooth-hover transition-colors cursor-pointer">
            <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20 7L4 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M15 12L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M9 17H4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div class="text-end mt-10 block md:hidden">
        <CreateProjectButton></CreateProjectButton>
      </div>
      <transition name="fade" mode="out-in">
        <template v-if="uiStore.howProjectsView === 'grid'">
          <ProjectsGrid key="grid"></ProjectsGrid>
        </template>
        <template v-else-if="uiStore.howProjectsView === 'list'">
          <ProjectsTable key="list" ></ProjectsTable>
        </template>
      </transition>
    </div>
  </div>

  <InputModal />
</template>

<script setup lang="ts">
import { useUiStore } from '@/modules/common/stores/ui.store.ts'
import InputModal from '@/modules/common/components/CreateProjectModal.vue'
import ProjectsGrid from '@/modules/projects/components/grid/ProjectsGrid.vue'
import ProjectsTable from '@/modules/projects/components/list/ProjectsTable.vue'
import CreateProjectButton from '@/modules/projects/components/CreateProjectButton.vue'

const uiStore = useUiStore()

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>
