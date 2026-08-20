import { createClient } from "@supabase/supabase-js";

export type ContactInput = { name: string; email: string; message: string };

export async function storeContactMessage(input: ContactInput) {
  const supabase = createClient(
    process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"]!,
    process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["VITE_SUPABASE_PUBLISHABLE_KEY"]!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );

  const { data, error } = await supabase
    .from("contact_messages")
    .insert({ name: input.name, email: input.email, message: input.message })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return data.id as string;
}
