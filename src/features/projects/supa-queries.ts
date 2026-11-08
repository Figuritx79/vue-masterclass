import { supabaseClient } from '@/utils/supabase'
import type { QueryData } from '@supabase/supabase-js'

export const projectsQuery = supabaseClient.from('projects').select()

export type Projects = QueryData<typeof projectsQuery>

export const projectQuery = (slug: string) =>
  supabaseClient
    .from('projects')
    .select(
      `
  *,
  tasks(
    id, name, status, due_date
  )`,
    )
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof projectQuery>>
