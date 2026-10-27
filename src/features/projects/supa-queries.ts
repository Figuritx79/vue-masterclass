import { supabaseClient } from "@/utils/supabase";
import type { QueryData } from "@supabase/supabase-js";

export const projectsQuery = supabaseClient.from('projects').select()

export type Projects = QueryData<typeof projectsQuery>
