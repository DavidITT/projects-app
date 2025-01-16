import { createRouter, createWebHistory } from 'vue-router'
import ProjectsLayout from '@/modules/projects/layouts/ProjectsLayout.vue'
import { handleAuthCheck } from '@/router/middlewares/auth-middleware.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/modules/auth/views/LoginView.vue'),
      meta: { requiresGuest: true }

    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/modules/auth/views/RegisterView.vue'),
      meta: { requiresGuest: true }
    },
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects' },
      component: ProjectsLayout,
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/modules/projects/views/ProjectsView.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'project/:id',
          name: 'project',
          component: () => import('@/modules/projects/views/ProjectView.vue'),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('@/modules/common/views/NotFound.vue')
    }
  ]
})

router.beforeEach(handleAuthCheck);

export default router
