import {Text} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {useAtomTheme} from '../contexts/AtomThemeContext';

import {TextVariants as variants, TextPresets} from './TextsPreset';

interface Texts {
  variant: TextPresets;
  type: string;
}

const Texts = ({children, variant, type}: PropsWithChildren<Texts>) => {
  // const themeVariant = useAtomValue(theme);
  const themeNow = useAtomTheme();

  return (
    <Text
      style={[
        variants[variant],
        {
          color:
            type === 'primary'
              ? themeNow.primaryTitle
              : themeNow.secondaryTitle,
        },
      ]}>
      {children}
    </Text>
  );
};

export default Texts;
