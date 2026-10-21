<script lang="ts" setup>
// In vue we have a lifecycle hook, OnMounted, OnUpdated, OnUnmounted, OnBeforeMount, OnBeforeUpdate, OnBeforeUnmount
// This hooks help with the component lifecycle, and we can use them to run code at specific points in the component's lifecycle
import { supabaseClient } from '@/utils/supabase'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'
import Datatable from '@/features/shared/tables/Datatable.vue'
import { columns } from '@/features/projects/columns'

usePageStore().pageData.title = 'Projects'
const projects = ref<Tables<'projects'>[]>([])
// In vue if we want to run a async function inside of a setup script we can use all the lifecycle hooks, but if we don't want to use them we can use a annonymous function and call it inside of the setup script, but this is not recommended because it can make the code harder to read and understand
// IIFE (Inmediately Invoked Funcition Expression )
// ;(async () => {
// })()
const getProjects = async () => {
  const { data, error } = await supabaseClient.from('projects').select()
  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  projects.value = data
}

await getProjects()
</script>

<template>
  <div>
    <!-- IN vue app in not recommed use an a tag, beacuse this reload the page  -->
    <!-- <a href="/">Home Page</a> -->
    <!-- <RouterLink to="/"> Go to home </RouterLink> -->

    <div class="container py-10 mx-auto">
      <Datatable :columns="columns" :data="projects" />
    </div>
  </div>
</template>
