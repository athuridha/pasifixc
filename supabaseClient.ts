import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ckazzsdukhhkgqsrizem.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrYXp6c2R1a2hoa2dxc3JpemVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NzkzMzUsImV4cCI6MjA1ODA1NTMzNX0.loyU43fGhKJ2fMtl5V7Gwv7Z81zAUkDYMlznxLSmdLM'
export const supabase = createClient(supabaseUrl, supabaseKey)