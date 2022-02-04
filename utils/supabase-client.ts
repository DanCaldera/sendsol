import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const updateUserName = async (user, name) => {
  await supabase
    .from('users')
    .update({
      full_name: name
    })
    .eq('id', user.id);
};

export const updateUser = async (user, data: any) => {
  const { error } = await supabase.from('users').update(data).eq('id', user.id);

  if (error) {
    console.log(error.message);
    throw error;
  }

  return { error: null };
};
