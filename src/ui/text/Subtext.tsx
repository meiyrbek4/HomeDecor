import {StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {LeagueSpartan} from '../../constants/fontFamily';
import {fontSize} from '../../constants/dimensions';
import {useAtomValue} from 'jotai';
import {palette, theme} from '../../config/atoms';

const Subtext = ({children}: PropsWithChildren) => {
  const atomTheme = useAtomValue(theme);
  const atomPalette = useAtomValue(palette);
  const themeNow = atomPalette[atomTheme];
  return (
    <Text style={[styles.heading, {color: themeNow.primaryText}]}>
      {children}
    </Text>
  );
};

export default Subtext;

const styles = StyleSheet.create({
  heading: {
    fontFamily: LeagueSpartan.regular,
    fontSize: fontSize.subtext,
  },
});
