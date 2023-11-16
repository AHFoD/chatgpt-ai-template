import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://cuaaxvmjfhuslqzxplgo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1YWF4dm1qZmh1c2xxenhwbGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTIzNzgsImV4cCI6MjAxNTYyODM3OH0.c3poj5leYL7CSnAOkfnjDDAfhh3WRPhYAF6Ia2Qoxpg',
);

const fetchData = async (req: Request): Promise<Response>=> {
  let { data, error } = await supabase.from('kereta').select('id');

  console.log({ data, error });

  return new Response();
};


export default fetchData