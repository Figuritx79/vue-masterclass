import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../database/types'
import configs from './config'

const { supabaseURL, supaseKey } = configs
export const supabaseClient = createClient<Database>(supabaseURL, supaseKey)
