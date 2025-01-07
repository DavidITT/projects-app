import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUiStore = defineStore('ui', () => {

  const sidebar = ref<boolean>(false)

  const toggleSidebar = () => {
    sidebar.value = !sidebar.value
  }

  return {

    //Properties
    sidebar,

    //getters
    isSidebarOpen: computed(() => sidebar.value),

    //actions
    toggleSidebar

  }
})
