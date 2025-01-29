import {ViewStyle} from 'react-native';
import {spacing} from './dimensions';

export const cardStyle = (wrapperWidth: number): ViewStyle => ({
  // height: 300,
  width: wrapperWidth / 2 - 10,
  gap: spacing.xs,
});
