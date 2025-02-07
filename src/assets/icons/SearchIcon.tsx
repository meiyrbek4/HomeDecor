import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SearchIcon = (props: any) => {
  const {color} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.896 11.896 3.714 3.714m-1.842-8.226A6.384 6.384 0 1 1 1 7.384a6.384 6.384 0 0 1 12.768 0Z"
      />
    </Svg>
  );
};
export default SearchIcon;
