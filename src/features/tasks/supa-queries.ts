import { supabaseClient } from '@/utils/supabase'
import type { QueryData } from '@supabase/supabase-js'
export const tasksWithProjectsQuery = supabaseClient.from('tasks').select(`
    *,
    projects(
     id,
     name,
     slug
    )
  `)

export const taskQuery = (id: string) =>
  supabaseClient
    .from('tasks')
    .select(
      `
      *,
      projects(
        id,
        slug
      )
      `,
    )
    .eq('id', id)
    .single()

export type Task = QueryData<ReturnType<typeof taskQuery>>
