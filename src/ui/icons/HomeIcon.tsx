import React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = (props: any) => {
  const {color} = props;
  return (
    <Svg
      width={26}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 12.305L12.8052 2L24.6056 12.305M13.6747 23.3745H20.7979V12.5057L12.8052 5.52101L4.80766 12.5057V23.3745H10.9276V16.6H14.678"
        stroke={color}
        strokeWidth={1.911}
        strokeMiterlimit={10}
      />
      <Path
        d="M2 28H24"
        stroke={color}
        strokeWidth={1.6088}
        strokeLinecap="square"
      />
    </Svg>
  );
};

export default HomeIcon;
