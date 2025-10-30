// src/services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Pega as variáveis de ambiente do Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL ou Anon Key não encontradas. Verifique seu .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);