import {supabase} from './supabase';

export const fetchNewCollection = async () => {
  const fetchedCollection = await supabase.from('newCollection').select('*');
  const {data, error, status, statusText} = fetchedCollection;
  return {data, error, status, statusText};
};
