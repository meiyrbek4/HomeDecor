import {ViewStyle} from 'react-native';
import {Theme} from '../../store/themeAtomsSlice';
import {colors} from '../../theme/colors';

const topMenuButtonStyle = (
  pressed: boolean,
  theme: Theme,
  isActive: boolean,
): ViewStyle => ({
  width: 70,
  height: 70,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: isActive ? colors.salmon : theme.itemBackground,
});

export default topMenuButtonStyle;
