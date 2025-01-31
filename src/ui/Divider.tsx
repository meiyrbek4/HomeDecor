import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.salmon,
  },
});
