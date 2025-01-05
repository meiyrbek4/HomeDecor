import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {Poppins} from '../constants/fontFamily';

const ButtonSecondary = ({children}: PropsWithChildren) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  btn: {
    // paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.beige,
    borderRadius: 30,
    width: '90%',
  },
  btnText: {
    fontFamily: Poppins.semibold,
    fontSize: fontSize.xl,
    color: colors.brownRosy,
    textAlign: 'center',
  },
});
