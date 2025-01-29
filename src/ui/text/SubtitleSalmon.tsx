import {StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Poppins} from '../../constants/fontFamily';
import {fontSize} from '../../constants/dimensions';

import {colors} from '../../constants/colors';

const SubtitleSalmon = ({children}: PropsWithChildren) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export default SubtitleSalmon;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Poppins.medium,
    fontSize: fontSize.subtitle,
    color: colors.salmon,
  },
});
