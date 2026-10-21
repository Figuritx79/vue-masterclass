<script lang="ts" setup>
// In vue we have a lifecycle hook, OnMounted, OnUpdated, OnUnmounted, OnBeforeMount, OnBeforeUpdate, OnBeforeUnmount
// This hooks help with the component lifecycle, and we can use them to run code at specific points in the component's lifecycle
import { supabaseClient } from '@/utils/supabase'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'
import DataTable from '@/features/shared/tables/Datatable.vue'
import { columns } from '@/features/tasks/columns'

usePageStore().pageData.title = 'My tasks'
const tasks = ref<Tables<'tasks'>[]>([])

const getTaks = async () => {
  const { data, error } = await supabaseClient.from('tasks').select()
  if (error) {
    console.error('Error fetching projects:', error)
  }
  tasks.value = data
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
