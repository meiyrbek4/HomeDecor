import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoriteIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={12}
      fill="none"
      {...props}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={0.638}
        d="M1.396 1.718c1.132-1.207 2.967-1.207 4.099 0l.849.906.849-.906c1.132-1.207 2.967-1.207 4.1 0 1.131 1.208 1.131 3.166 0 4.373L6.343 11.37 1.396 6.09c-1.132-1.207-1.132-3.165 0-4.373Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default FavoriteIcon;
