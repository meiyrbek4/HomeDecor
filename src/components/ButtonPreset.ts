import {ViewStyle} from 'react-native';
import {colors} from '../theme/colors';
import {spacing} from '../theme/dimensions';

interface Primary {
  pressed: boolean;
  contentWidth: number;
}
interface Secondary {
  pressed: boolean;
  contentWidth: number;
  color: string;
}

interface Rounded {
  pressed: boolean;
  size: number;
}

interface Variants {
  primary: ({pressed, contentWidth}: Primary) => ViewStyle;
  secondary: ({pressed, contentWidth, color}: Secondary) => ViewStyle;
  rounded: ({pressed, size}: Rounded) => ViewStyle;
}

export const buttonVariants: Variants = {
  primary: ({pressed, contentWidth}) => ({
    paddingVertical: spacing.xs,
    backgroundColor: pressed ? colors.beige : colors.salmon,
    borderRadius: 30,
    width: contentWidth * 0.5,
  }),
  secondary: ({pressed, contentWidth, color}) => ({
    paddingVertical: spacing.xs,
    backgroundColor: pressed ? colors.salmon : color,
    borderRadius: 30,
    width: contentWidth * 0.5,
  }),
  rounded: ({pressed, size}) => ({
    width: size,
    height: size,
    borderRadius: 50,
    backgroundColor: pressed ? colors.terracotta : colors.salmon,
    alignItems: 'center',
    justifyContent: 'center',
  }),
};

export type ButtonPresets = keyof typeof buttonVariants;
