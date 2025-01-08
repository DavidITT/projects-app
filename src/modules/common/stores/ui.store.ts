import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUiStore = defineStore('ui', () => {

  const sidebar = ref<boolean>(false)
  const projectsView = ref<'grid' | 'list'>('grid')
  const createProjectModal = ref<boolean>(false)

  const toggleSidebar = () => {
    sidebar.value = !sidebar.value
  }

  const switchProjectsView = (view: 'grid' | 'list') => {
    projectsView.value = view
  }

  const toggleModal = (status: boolean) => {
    createProjectModal.value = status
  }

  return {

    //getters
    isSidebarOpen: computed(() => sidebar.value),
    howProjectsView: computed(() => projectsView.value),
    createProject: computed(() => createProjectModal.value),

    //actions
    toggleSidebar,
    switchProjectsView,
    toggleModal
  }
})
