import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://ihyyrbnyhwfloagqcnlm.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjAwODY4NiwiZXhwIjoxOTUxNTg0Njg2fQ.An6uyIKYSxEIiK7V9pWc4aVJ4IrWUmGOKEcsRrQJtBA',
 {localStorage: AsyncStorage })