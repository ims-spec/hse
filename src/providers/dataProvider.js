import { supabaseDataProvider } from "ra-supabase";
import { supabaseClient } from "./supabase";

export const dataProvider = supabaseDataProvider({
    instanceUrl: import.meta.env.VITE_API_URL,
    apiKey: import.meta.env.VITE_ANON_KEY,
    supabaseClient
})



