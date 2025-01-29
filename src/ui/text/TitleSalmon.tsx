import {StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Poppins} from '../../constants/fontFamily';
import {fontSize} from '../../constants/dimensions';
import {colors} from '../../constants/colors';

const TitleSalmon = ({children}: PropsWithChildren) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export default TitleSalmon;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Poppins.semibold,
    fontSize: fontSize.title,
    color: colors.salmon,
  },
});
