<script lang="ts" setup>
// In vue we have a lifecycle hook, OnMounted, OnUpdated, OnUnmounted, OnBeforeMount, OnBeforeUpdate, OnBeforeUnmount
// This hooks help with the component lifecycle, and we can use them to run code at specific points in the component's lifecycle
import { ref } from 'vue'
import DataTable from '@/features/shared/tables/Datatable.vue'
import { columns } from '@/features/tasks/columns'
import type { TasksWithProjects } from '@/features/tasks/types'
import { tasksWithProjectsQuery } from '@/features/tasks/supa-queries'

usePageStore().pageData.title = 'My tasks'
const tasks = ref<TasksWithProjects>([])

const getTaks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) {
    console.error('Error fetching projects:', error)
  }
  if (data === null) return
  const tasksWithProjects: TasksWithProjects = data
  // tasks.value = data

  tasks.value = tasksWithProjects
}

await getTaks()
</script>

<template>
  <div>
    <!-- IN vue app in not recommed use an a tag, beacuse this reload the page  -->
    <!-- <a href="/">Home Page</a> -->
    <div class="container py-10 mx-auto">
      <DataTable :columns="columns" :data="tasks" />
    </div>
  </div>
</template>
