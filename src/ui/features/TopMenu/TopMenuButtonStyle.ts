import {ViewStyle} from 'react-native';
import {Theme} from '../../../config/atoms';

const topMenuButtonStyle = (pressed: boolean, theme: Theme): ViewStyle => ({
  width: 70,
  height: 70,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: theme.itemBackground,
});

export default topMenuButtonStyle;
