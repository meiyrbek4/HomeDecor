import {atom} from 'jotai';
import {supabase} from '../config/supabase';
import {loadable} from 'jotai/utils';

const asyncNewCollectionAtom = atom(async () => {
  return await supabase
    .from('furniture')
    .select('*')
    .eq('category', 'newCollection');
});

export const loadableAsyncAtom = loadable(asyncNewCollectionAtom);
