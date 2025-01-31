import {StyleSheet, View} from 'react-native';
import React from 'react';
import AddIcon from './icons/AddIcon';
import {colors} from '../constants/colors';

const AddToCart = () => {
  return (
    <View style={styles.container}>
      <AddIcon />
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.salmon,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
