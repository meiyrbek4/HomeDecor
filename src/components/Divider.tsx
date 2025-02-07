import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';

interface DividerSizing {
  sm: number;
  md: number;
  lg: number;
}

const dividerSizing: DividerSizing = {
  sm: 1,
  md: 2,
  lg: 3,
};

const Divider = ({size}: {size: keyof DividerSizing}) => {
  return <View style={[styles.divider, {height: dividerSizing[size]}]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    backgroundColor: colors.salmon,
  },
});
