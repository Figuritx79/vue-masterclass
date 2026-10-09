<script lang="ts" setup>
import { supabaseClient } from '@/utils/supabase'
import { ref } from 'vue'

// In vue we have a lifecycle hook, OnMounted, OnUpdated, OnUnmounted, OnBeforeMount, OnBeforeUpdate, OnBeforeUnmount
// This hooks help with the component lifecycle, and we can use them to run code at specific points in the component's lifecycle
// const getProjects = async () => {
// }
const projects = ref()
// In vue if we want to run a async function inside of a setup script we can use all the lifecycle hooks, but if we don't want to use them we can use a annonymous function and call it inside of the setup script, but this is not recommended because it can make the code harder to read and understand
// IIFE (Inmediately Invoked Funcition Expression )
;(async () => {
  const { data, error } = await supabaseClient.from('projects').select()
  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  projects.value = data
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>

    <!-- IN vue app in not recommed use an a tag, beacuse this reload the page  -->
    <!-- <a href="/">Home Page</a> -->
    <RouterLink to="/"> Go to home </RouterLink>
    {{ projects }}
    <!-- <a href="/">Home Page</a> -->
  </div>
</template>
