<script setup lang="ts">
import { supabaseClient } from '@/utils/supabase'
import { ref } from 'vue'
import type { Tables } from '../../database/types'

const tasks = ref<Tables<'tasks'>[]>()
;(async () => {
  const { data, error } = await supabaseClient.from('tasks').select()
  if (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
  tasks.value = data
})()
</script>

<template>
  <div>
    <h1>Tasks Page</h1>

    <div v-if="tasks">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
