import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// In vue we have to ways to work with routers. The first one is the tradicional router and the second one is file based routing
// Create a new routes instance
const router = createRouter({
  // Hisotry permit html five history mode(this is a browser history api ). This handle the navigation between pages without reloagin the page
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // define a routes of the app and you can assing a specific component for each route
  // this is old way to define routes, now we can use file based routing with vue-router/
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home ',
  //     component: () => import('@/views/HomeView.vue'),
  //   },
  //   {
  //     path: '/projects',
  //     name: 'projects',
  //     component: () => import('@/views/ProjectsView.vue'),
  //   },
  //   {
  // To use a dymanic url we need to use a wildcard with : like express
  //   path: '/projects/:id',
  //   name: 'single-project',
  //   component: () => import('@/views/SingleProjectView.vue'),
  // },
  // {
  //   path: '/tasks',
  //   name: 'single-task',
  //   component: () => import('@/views/TasksView.vue'),
  // },
  // {
  // this is necessary to match not fount routes
  // path: '/:cathAll(.*)*',
  // in this case is for a custom not found page for projects view, we can build a custom 404 page for any route
  // path: '/projects:catchAll(.*)*'
  // name: 'NotFound',
  // this is hyperscript in this case we can build html with the h function, first param is the tag, attributes and third the text
  //   component: h('p', { style: 'color:red' }, '404 Not Found'),
  // },
  // ],
})
export default router
