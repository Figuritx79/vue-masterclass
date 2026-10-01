import { createClient } from '@supabase/supabase-js'
import configs from './config'

const { supabaseURL, supaseKey } = configs
export const supabaseClient = createClient(supabaseURL, supaseKey)
