import {atom} from 'jotai';
import {colors} from '../theme/colors';

export interface Theme {
  background: string;
  primaryText: string;
  secondaryText: string;
  itemBackground: string;
  icon: string;
  tint: string;

  activeElement: string;
  inactiveElement: string;

  primaryTitle: string;
  secondaryTitle: string;
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
    secondaryText: colors.brownRosy,
    itemBackground: colors.beige,
    icon: colors.orangeDark,
    activeElement: colors.black,
    inactiveElement: colors.salmon,
    tint: colors.black,

    primaryTitle: colors.salmon,
    secondaryTitle: colors.black,
  },
  dark: {
    background: colors.black,
    primaryText: colors.white,
    secondaryText: colors.salmon,
    itemBackground: colors.orangeDark,
    icon: colors.salmon,
    tint: colors.white,

    activeElement: colors.salmon,
    inactiveElement: colors.white,

    primaryTitle: colors.white,
    secondaryTitle: colors.salmon,
  },
});

// const color = {
//   white: '#FFFFFF',
//   black: '#363130',
//   salmon: '#F4B5A4',
//   terracotta: '#CC7861',
//   brownRosy: '#DCBEB6',
//   beige: '#FAF0E6',
//   orangeDark: '#4B4544',
// };
