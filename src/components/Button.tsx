import {Pressable, StyleSheet, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {fontSize} from '../theme/dimensions';
import {colors} from '../theme/colors';
import {Poppins} from '../theme/fontFamily';
import {buttonVariants as variants, ButtonPresets} from './ButtonPreset';
import {useAtomTheme} from '../contexts/AtomThemeContext';

interface Props {
  children: string | React.JSX.Element;
  contentWidth?: number;
  onPress?: () => void;
  variant: ButtonPresets;
  size?: number;
}

const Button = ({
  children,
  contentWidth,
  onPress,
  variant,
  size,
}: PropsWithChildren<Props>) => {
  const themeNow = useAtomTheme();

  if (variant === 'rounded' && size) {
    return (
      <Pressable style={({pressed}) => variants.rounded({pressed, size})}>
        {children}
      </Pressable>
    );
  }

  if (contentWidth) {
    return (
      <Pressable
        style={
          variant === 'secondary'
            ? ({pressed}) =>
                variants[variant]({
                  pressed,
                  contentWidth,
                  color: themeNow.itemBackground,
                })
            : ({pressed}) => variants.primary({pressed, contentWidth})
        }
        onPress={onPress}>
        {variant === 'primary' && (
          <Text style={styles.btnText}>{children}</Text>
        )}
        {variant === 'secondary' && (
          <Text style={[styles.btnText, {color: themeNow.secondaryText}]}>
            {children}
          </Text>
        )}
      </Pressable>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: Poppins.semibold,
    fontSize: fontSize.title,
    color: colors.terracotta,
    textAlign: 'center',
  },
});
