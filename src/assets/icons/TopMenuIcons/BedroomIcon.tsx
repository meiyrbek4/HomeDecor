import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../theme/colors';
const BedroomIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={32}
      fill="none"
      {...props}>
      <Path
        stroke={props.isActive ? colors.terracotta : colors.brownRosy}
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M8.887 26.918v3.098H4.873v-3.098m40.213 0v3.098h-4.014v-3.098M4.782 13.735h40.387c.82 0 1.608.328 2.188.913.58.584.906 1.376.906 2.202V26.95H1.688V16.85a3.133 3.133 0 0 1 .906-2.203 3.091 3.091 0 0 1 2.187-.912ZM44.675 4.67v9.066H5.3V4.67a3.675 3.675 0 0 1 1.066-2.586 3.628 3.628 0 0 1 2.571-1.067h32.11a3.609 3.609 0 0 1 2.566 1.07 3.655 3.655 0 0 1 1.063 2.583Zm-22.728 3.88v5.186H11.396V8.55c0-.275.108-.538.3-.732.194-.195.455-.304.728-.304h8.496c.273 0 .534.11.727.304.193.194.301.457.301.732Zm16.624 0v5.186H28.019V8.55c0-.275.109-.538.301-.732.193-.195.455-.304.727-.304h8.496c.273 0 .535.11.727.304.193.194.302.457.302.732Z"
      />
    </Svg>
  );
};
export default BedroomIcon;
