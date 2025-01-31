import {StyleSheet, View} from 'react-native';
import React from 'react';
import FavoriteIcon from './icons/FavoriteIcon';
import {colors} from '../constants/colors';

const AddToFavorites = () => {
  return (
    <View style={styles.container}>
      <FavoriteIcon />
    </View>
  );
};

export default AddToFavorites;

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
