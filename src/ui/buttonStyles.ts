import {ViewStyle} from 'react-native';
import {colors} from '../constants/colors';
import {spacing} from '../constants/dimensions';

interface Primary {
  pressed: boolean;
  contentWidth: number;
}
interface Secondary {
  pressed: boolean;
  contentWidth: number;
  color: string;
}

export const primaryButton = ({pressed, contentWidth}: Primary): ViewStyle => ({
  paddingVertical: spacing.xs,
  backgroundColor: pressed ? colors.beige : colors.salmon,
  borderRadius: 30,
  width: contentWidth * 0.5,
});

export const secondaryButton = ({
  pressed,
  contentWidth,
  color,
}: Secondary): ViewStyle => ({
  paddingVertical: spacing.xs,
  backgroundColor: pressed ? colors.salmon : color,
  borderRadius: 30,
  width: contentWidth * 0.5,
});
