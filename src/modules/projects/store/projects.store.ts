import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Project } from '@/modules/projects/interfaces/project.interface.ts'
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '@vueuse/core'
import { type RouteParamValue, useRouter } from 'vue-router'

export const useProjectsStore = defineStore('projects', () => {

  const router = useRouter()
  const projects = ref(useLocalStorage<Project[]>('projects', []))
  const project = ref<Project>()

  const addProject = (name: string) => {
    if (name.length === 0) return
    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: []
    })
  }

  const getProjectInfo = (id: string | RouteParamValue[]) => {
    const foundProject = projects.value.find((x) => x.id === id);
    if (foundProject) {
      project.value = foundProject;
    } else {
      router.replace('/not-found').catch(() => {
        throw new Error('Navigation failed');
      });
    }
  };

  const addTaskToProject = (task: string, idProject: string | undefined) => {
    if (!idProject) return;
    const project = projects.value.find((project) => project.id === idProject)
    if (!project) return
    project.tasks.push({
      id: uuidv4(),
      name: task,
      completedAt: null
    })
  }

  const updateTaskToProject = (projectId: string, taskId: string, name: string) => {
    const project = projects.value.find(projectItem => projectItem.id === projectId)
    if (!project) return
    const task = project.tasks.find(taskItem => taskItem.id === taskId)
    if (!task) return

    task.name = name
  }

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find(projectItem => projectItem.id === projectId)
    if (!project) return
    const task = project.tasks.find(taskItem => taskItem.id === taskId)
    if (!task) return

    task.completedAt = task.completedAt ? null
      :
      new Date().toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
  }

  return {
    //properties
    projects,
    project,

    //getters
    projectList: computed(() => [...projects.value]),
    existProjects: computed(() => projects.value.length > 0),
    projectInfo: computed(() => project.value),
    projectsWithCompletion: computed(() => {
      return projects.value.map(project => {

        const total = project.tasks.length
        const completed = project.tasks.filter(task => task.completedAt).length
        const completion = total === 0 ? 0 : Math.round((completed / total) * 100)

        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: completion
        }
      })
    }),

    //actions
    addProject,
    addTaskToProject,
    getProjectInfo,
    updateTaskToProject,
    toggleTask
  }
})
