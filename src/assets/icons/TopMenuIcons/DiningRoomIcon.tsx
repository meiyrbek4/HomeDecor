import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../theme/colors';

const DiningRoomIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={29}
      fill="none"
      {...props}>
      <Path
        stroke={props.isActive ? colors.terracotta : colors.brownRosy}
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M1.688 14.892V0m0 14.892V29m0-14.108h12.997V29M1.687 19.176h13.004m28.537-4.284V0m0 14.892V29m0-14.108H30.224V29m13.004-9.839H30.224m-7.946-8.849V29M10.088 6.03H34.58v4.282H10.088V6.03Z"
      />
    </Svg>
  );
};
export default DiningRoomIcon;
