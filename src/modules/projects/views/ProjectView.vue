<template>
  <div class="overflow-x-auto w-full p-5">
    <BreadCrumbs :name="projectStore.projectInfo?.name ?? 'No name'"></BreadCrumbs>
    <section>

      <form @submit.prevent="newTask" class="flex flex-row align-center justify-start my-10 space-x-3">
        <input type="text"
               class="input input-sm input-primary focus:text-gray-800 bg-white w-1/2 opacity-80 transition-all hover:opacity-100 focus:opacity-100"
               @keyup.enter="newTask"
               v-model.trim="task"
               ref="inputRef"
               placeholder="Nueva tarea">
        <button type="submit" class="btn btn-sm btn-info hover:bg-[#1495CE] text-white">
          Guardar
        </button>
      </form>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-border mt-4">
          <thead class="hidden md:table-header-group border-b">
          <tr class="bg-[#3A78B6]/80 text-white/80">
            <th class="py-2 px-4 text-center">Completed</th>
            <th class="py-2 px-4 text-left">Task</th>
            <th class="py-2 px-4 text-center">Completed date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <template v-if="projectStore.projectInfo">
            <template v-if="projectStore.projectInfo.tasks.length > 0">
              <tr class="hover hover:bg-gray-100 hover:text-gray-800"
                  v-for="(task, index) in projectStore.projectInfo.tasks" :key="task.id">
                <th class="text-center">
                  <input @change="projectStore.toggleTask(projectStore.projectInfo.id, task.id)" type="checkbox"
                         :checked="!! task.completedAt"
                         class="checkbox checkbox-info bg-white border-blue-500 checkbox-sm checked:bg-blue-500 checked:border-blue-700 checked:ring-20">
                </th>
                <td @dblclick="toggleDoubleClick(index, task.name)" class="hidden md:block">
                  <div v-if="editTaskIndex === index">
                    <form @submit.prevent="updateTaskProject(projectStore.projectInfo.id, task.id)"
                          class="flex space-x-2 items-center w-full">
                      <input
                        type="text"
                        class="input input-sm input-primary bg-white opacity-60 transition-all hover:opacity-100 focus:opacity-100 flex-1"
                        :placeholder="task.name"
                        v-model.trim="updateTask">
                      <button type="submit" v-if="updateTask !== previousTaskValue">
                        <Save></Save>
                      </button>
                      <Close @close-input="closeInput"></Close>
                    </form>
                  </div>
                  <span v-else class="cursor-pointer">
                  {{ shouldShorten ? shortText(task.name) : task.name }}
               </span>
                </td>
                <td class="block md:hidden">
                  <span>{{ shortText(task.name) }}</span>
                </td>
                <td class="text-center">{{ task.completedAt }}</td>
                <td>
                  <OptionsIcon></OptionsIcon>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="4" class="text-center">No hay tareas aun</td>
              </tr>
            </template>
          </template>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'
import BreadCrumbs from '@/modules/projects/components/BreadCrumbs.vue'
import Save from '@/modules/common/icons/SaveIcon.vue'
import Close from '@/modules/common/icons/CloseIcon.vue'
import OptionsIcon from '@/modules/common/icons/OptionsIcon.vue'
import { shortText } from '../../common/helpers/shortText.ts'

const route = useRoute()
const projectStore = useProjectsStore()

const inputRef = ref<HTMLInputElement | null>(null)
const task = ref<string>('')
const editTaskIndex = ref<number | null>(null)
const updateTask = ref<string>('')
const previousTaskValue = ref<string>('')
const shouldShorten = ref<boolean>(false)

const newTask = () => {
  if (!task.value) {
    inputRef.value?.focus()
    return
  }
  projectStore.addTaskToProject(task.value, projectStore.projectInfo?.id)
  task.value = ''
}

const toggleDoubleClick = (index: number, name: string) => {
  previousTaskValue.value = name
  updateTask.value = name
  editTaskIndex.value = index
}

const updateTaskProject = (projectId: string, taskId: string) => {
  if (previousTaskValue.value === updateTask.value) return
  projectStore.updateTaskToProject(projectId, taskId, updateTask.value)
  editTaskIndex.value = null
}

const closeInput = () => {
  editTaskIndex.value = null
}

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


onMounted(() => {
  projectStore.getProjectInfo(route.params.id)
})


</script>

<style scoped>

</style>

