import {Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import topMenuButtonStyle from './TopMenuButtonStyle';
import {useAtomTheme} from '../../../contexts/AtomThemeContext';

const TopMenuButton = ({children}: PropsWithChildren) => {
  const themeNow = useAtomTheme();
  return (
    <Pressable style={({pressed}) => topMenuButtonStyle(pressed, themeNow)}>
      {children}
    </Pressable>
  );
};

export default TopMenuButton;
