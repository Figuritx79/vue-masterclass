// import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Create a new routes instance
const router = createRouter({
  // Hisotry permit html five history mode(this is a browser history api ). This handle the navigation between pages without reloagin the page
  history: createWebHistory(import.meta.env.BASE_URL),
  // define a routes of the app and you can assing a specific component for each route
  routes: [
    {
      path: '/',
      name: 'home ',
      // This is a dynamic import that will only load the component when it is needed
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      // This is a dynamic import that will only load the component when it is needed
      component: () => import('@/views/ProjectsView.vue'),
    },
  ],
})

export default router
