import {
  createClient,
  PostgrestResponse,
  SupabaseClient,
} from '@supabase/supabase-js';

const supabase: SupabaseClient = createClient(
  'https://cuaaxvmjfhuslqzxplgo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1YWF4dm1qZmh1c2xxenhwbGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTIzNzgsImV4cCI6MjAxNTYyODM3OH0.c3poj5leYL7CSnAOkfnjDDAfhh3WRPhYAF6Ia2Qoxpg',
);

const fetchData = async (): Promise<any> => {
  try {
    // Fetch data from the 'kereta' table, selecting 'id' column
    console.log({ supabase });

    const { data, error }: PostgrestResponse<any> = await supabase
      .from('kereta')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null; // Return a default value or handle error cases
    }

    // Log the fetched data
    console.log('Fetched data:', data);

    // Return the fetched data
    return data[0];

    // Optionally, you can handle the fetched data here before returning
    // For example, transform the data or perform additional operations
  } catch (fetchError) {
    console.error('Error during fetch:', fetchError);
    throw fetchError; // Throw the error to handle it where fetchData is called
  }
};

export default fetchData;
