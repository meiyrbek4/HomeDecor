import {StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Poppins} from '../../constants/fontFamily';
import {fontSize} from '../../constants/dimensions';

import {useAtomTheme} from '../../contexts/AtomThemeContext';

const TitleBlack = ({children}: PropsWithChildren) => {
  const themeNow = useAtomTheme();
  return (
    <Text style={[styles.heading, {color: themeNow.primaryText}]}>
      {children}
    </Text>
  );
};

export default TitleBlack;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Poppins.semibold,
    fontSize: fontSize.title,
  },
});
