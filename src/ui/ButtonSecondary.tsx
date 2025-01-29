import {Pressable, StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {fontSize} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {Poppins} from '../constants/fontFamily';
import {secondaryButton} from './buttonStyles';
import {useAtomValue} from 'jotai';
import {palette, theme} from '../config/atoms';

interface Props {
  contentWidth: number;
}

const ButtonSecondary = ({
  children,
  contentWidth,
}: PropsWithChildren<Props>) => {
  const atomTheme = useAtomValue(theme);
  const atomColors = useAtomValue(palette);
  const themeNow = atomColors[atomTheme];
  return (
    <Pressable
      style={({pressed}) =>
        secondaryButton({
          pressed,
          contentWidth,
          color: themeNow.itemBackground,
        })
      }>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: Poppins.semibold,
    fontSize: fontSize.title,
    color: colors.brownRosy,
    textAlign: 'center',
  },
});
