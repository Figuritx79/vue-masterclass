import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
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
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
  ],
})

export default router
