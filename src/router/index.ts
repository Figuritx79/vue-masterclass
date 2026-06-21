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
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      // To use a dymanic url we need to use a wildcard with : like express
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue'),
    },
  ],
})

export default router
