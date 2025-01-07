<template>
  <div class="overflow-x-auto w-full p-5">
    <BreadCrumbs :name="project?.name ?? 'No name'"></BreadCrumbs>
    <section>
      <input type="text"
             class="input input-sm input-primary w-1/3 opacity-60 transition-all hover:opacity-100 focus:opacity-100 my-10"
             @keyup.enter="newTask"
             ref="inputRef"
             placeholder="Nueva tarea">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
          <tr>
            <th class="w-14">Completada</th>
            <th>Tarea</th>
            <th>Completada en</th>
          </tr>
          </thead>
          <tbody>
          <template v-if="project.tasks.length > 0">
            <tr class="hover" v-for="(task, index) in project.tasks" :key="task.id">
              <th class="text-center">
                <input @change="projectStore.toggleTask(project?.id, task.id)" type="checkbox"
                       :checked="!! task.completedAt" class="checkbox checkbox-primary checkbox-sm">
              </th>
              <td @dblclick="toggleDoubleClick(index, task.name)">
                <div v-if="editTaskIndex === index">
                  <form @submit.prevent="updateTaskProject(project.id, task.id)"
                        class="flex space-x-2 items-center w-full">
                    <input
                      type="text"
                      class="input input-sm input-primary opacity-60 transition-all hover:opacity-100 focus:opacity-100 flex-1"
                      :placeholder="task.name"
                      v-model.trim="updateTask">
                    <button type="submit" v-if="updateTask !== previousTaskValue">
                      <Save />
                    </button>
                    <Close @close-input="closeInput" />
                  </form>

                </div>
                <span v-else class="cursor-pointer">{{ task.name }}</span>
              </td>
              <td>{{ task.completedAt }}</td>
            </tr>
          </template>

          <template v-else>
            <tr>
              <td colspan="3" align="center">No hay ninguna tarea</td>
            </tr>
          </template>

          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import BreadCrumbs from '@/modules/projects/components/BreadCrumbs.vue'
import { useProjectsStore } from '@/modules/projects/store/projects.store.ts'
import Save from '@/modules/common/icons/Save.vue'
import Close from '@/modules/common/icons/Close.vue'

interface Props {
  id: string
}

const props = defineProps<Props>()
const router = useRouter()
const projectStore = useProjectsStore()
const inputRef = ref<HTMLInputElement>(null)
const editTaskIndex = ref(null)
const updateTask = ref(null)
const previousTaskValue = ref(null)

const newTask = (event) => {
  const task = event.target.value.trim()
  if (!task) return
  projectStore.addTaskToProject(task, props.id)
  inputRef.value.value = null
}

const toggleDoubleClick = (index, name) => {
  previousTaskValue.value = name
  updateTask.value = name
  editTaskIndex.value = index
}

const updateTaskProject = (projectId, taskId) => {
  if (previousTaskValue.value === updateTask.value) return
  projectStore.updateTaskToProject(projectId, taskId, updateTask.value)
  editTaskIndex.value = null
}

const closeInput = () => {
  editTaskIndex.value = null
}

const project = computed(() => {
  return projectStore.projectList.find((x) => x.id === props.id) ?? router.replace('/')
})

</script>

