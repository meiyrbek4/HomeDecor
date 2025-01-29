import {Pressable, StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {fontSize} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {Poppins} from '../constants/fontFamily';
import {primaryButton} from './buttonStyles';

interface Props {
  contentWidth: number;
  onPress?: () => void;
}

const ButtonPrimary = ({
  children,
  contentWidth,
  onPress,
}: PropsWithChildren<Props>) => {
  return (
    <Pressable
      style={({pressed}) => primaryButton({pressed, contentWidth})}
      onPress={onPress}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: Poppins.semibold,
    fontSize: fontSize.title,
    color: colors.terracotta,
    textAlign: 'center',
  },
});
