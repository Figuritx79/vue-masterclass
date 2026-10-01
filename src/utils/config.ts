type Configs = {
  supabaseURL: string
  supaseKey: string
}

const configs: Configs = {
  supabaseURL: import.meta.env.VITE_SUPABASE_URL,
  supaseKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
}

export default configs
