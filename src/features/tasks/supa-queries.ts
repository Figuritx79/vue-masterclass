import { supabaseClient } from '@/utils/supabase'
export const tasksWithProjectsQuery = supabaseClient.from('tasks').select(`
    *,
    projects(
     id,
     name,
     slug
    )
  `)
