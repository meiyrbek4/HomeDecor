import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CategoriesIcon = (props: any) => {
  const {color} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={22}
      fill="none"
      {...props}>
      <Path
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={1.911}
        d="M10.457 3.382h12.17m-12.17 7.62h12.17m-12.17 7.617h12.17M1.604 1.445h6.133V5.32H1.606V1.445Zm0 7.62h6.133v3.874H1.606V9.066Zm0 7.617h6.133v3.873H1.606v-3.873Z"
      />
    </Svg>
  );
};
export default CategoriesIcon;
