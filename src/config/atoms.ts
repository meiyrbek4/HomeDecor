import {atom} from 'jotai';
import {colors} from '../constants/colors';

export interface Theme {
  background: string;
  primaryText: string;
  itemBackground: string;
  icon: string;
  tint: string;

  activeElement: string;
  inactiveElement: string;
}
interface Palette {
  light: Theme;
  dark: Theme;
}

export const theme = atom<keyof Palette>('dark');

export const palette = atom<Palette>({
  light: {
    background: colors.white,
    primaryText: colors.black,
    itemBackground: colors.beige,
    icon: '#4B4544',
    activeElement: colors.black,
    inactiveElement: colors.salmon,
    tint: colors.black,
  },
  dark: {
    background: colors.black,
    primaryText: colors.white,
    itemBackground: '#4B4544',
    icon: colors.salmon,
    tint: colors.white,

    activeElement: colors.salmon,
    inactiveElement: colors.white,
  },
});

// const color = {
//   white: '#FFFFFF',
//   black: '#363130',
//   salmon: '#F4B5A4',
//   terracotta: '#CC7861',
//   brownRosy: '#DCBEB6',
//   beige: '#FAF0E6',
//   orangeDark: '#CC7861',
// };
