import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProfileIcon = (props: any) => {
  const {color} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={23}
      fill="none"
      {...props}>
      <Path
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={1.911}
        d="M1.826 22.138v-.645a8.537 8.537 0 1 1 17.075 0v.645M14.429 5.933a4.066 4.066 0 1 1-8.131 0 4.066 4.066 0 0 1 8.131 0Z"
      />
    </Svg>
  );
};
export default ProfileIcon;
