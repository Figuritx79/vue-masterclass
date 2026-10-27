import type { QueryData } from '@supabase/supabase-js'
import type { tasksWithProjectsQuery } from './supa-queries'

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>
