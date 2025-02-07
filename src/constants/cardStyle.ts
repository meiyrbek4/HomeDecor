import {ViewStyle} from 'react-native';
import {spacing} from '../theme/dimensions';

export const cardStyle = (wrapperWidth: number): ViewStyle => ({
  // height: 300,
  width: wrapperWidth / 2 - 10,
  gap: spacing.xs,
  // paddingVertical: 10,
});
