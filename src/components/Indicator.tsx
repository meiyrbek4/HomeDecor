import {StyleSheet, View} from 'react-native';
import React from 'react';
import {spacing} from '../theme/dimensions';
import {colors} from '../theme/colors';

const Indicator = () => {
  return (
    <View style={styles.indicator}>
      <View style={styles.indicatorItem} />
      <View style={styles.indicatorItem} />
      <View style={styles.indicatorItem} />
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xs,
  },
  indicatorItem: {
    width: 20,
    height: 4,
    borderRadius: 5,
    backgroundColor: colors.salmon,
  },
});
