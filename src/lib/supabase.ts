import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveSubscriber(email: string, publicationId?: number) {
  return supabase
    .from('subscribers')
    .insert([{ email, publication_id: publicationId }])
    .select()
    .single();
}

export async function saveContactMessage(message: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return supabase
    .from('contact_messages')
    .insert([message])
    .select()
    .single();
}