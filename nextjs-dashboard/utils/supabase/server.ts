import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
    const cookieStore = await cookies()

    // const supabaseURL = 'https://gcihedqeiktgtozmnerb.supabase.co'
    // const supabaseKey = 'sb_publishable_biwKu2vUNA1o_LtkpQrrxg_ml0wfjTq'
    const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

    return createServerClient(
        supabaseURL!,
        supabaseKey!,
    {
        cookies: {
            getAll() {
                return cookieStore.getAll()
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options }) =>
                    cookieStore.set(name, value, options))
                } catch (error) {
                    console.error("Cookies issue:", error);
                }
            }
        }
    }
    )
}