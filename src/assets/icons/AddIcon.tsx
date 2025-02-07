import React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2.551}
        d="M5.727 1.813v4.144m0 0V10.2m0-4.243h4.191m-4.19 0H1.53"
      />
    </Svg>
  );
};
export default AddIcon;
