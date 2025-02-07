import {Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import topMenuButtonStyle from './TopMenuButtonStyle';
import {useAtomTheme} from '../../contexts/AtomThemeContext';

interface Props {
  onPress: () => void;
  isActive: boolean;
  setActive: () => void;
}

const TopMenuButton = ({
  onPress,
  isActive,
  setActive,
  children,
}: PropsWithChildren<Props>) => {
  const themeNow = useAtomTheme();

  const handlePress = () => {
    setActive();
    onPress();
  };
  return (
    <Pressable
      style={({pressed}) => topMenuButtonStyle(pressed, themeNow, isActive)}
      onPress={handlePress}>
      {children}
    </Pressable>
  );
};

export default TopMenuButton;
