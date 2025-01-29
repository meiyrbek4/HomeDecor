import {useAtomValue} from 'jotai';
import React, {createContext, PropsWithChildren, useContext} from 'react';
import {palette, Theme, theme} from '../config/atoms';
import {colors} from '../constants/colors';

const AtomThemeContext = createContext<Theme>({
  background: colors.white,
  primaryText: colors.black,
  itemBackground: colors.beige,
  icon: '#4B4544',
  activeElement: colors.black,
  inactiveElement: colors.salmon,
  tint: colors.black,
});

const AtomThemeProvider = ({children}: PropsWithChildren) => {
  const atomTheme = useAtomValue(theme);
  const atomPalette = useAtomValue(palette);
  const themeNow = atomPalette[atomTheme];
  return (
    <AtomThemeContext.Provider value={themeNow}>
      {children}
    </AtomThemeContext.Provider>
  );
};

const useAtomTheme = () => {
  const themeNow = useContext(AtomThemeContext);
  if (themeNow === undefined) {
    throw new Error('Atom Theme Context used outside by Atom Theme Provider');
  }
  return themeNow;
};

export {useAtomTheme, AtomThemeProvider};
