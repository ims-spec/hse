import { createClient } from "@supabase/supabase-js";


export const supabaseClient = createClient(
    import.meta.env.VITE_API_URL,
    import.meta.env.VITE_ANON_KEY
)

