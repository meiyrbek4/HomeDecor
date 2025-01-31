import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const KitchenIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={43}
      fill="none"
      {...props}>
      <Path
        stroke="#DCBEB6"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M32.257 42V18.598H13.055V42m19.202 0H13.055m19.202 0h11.4V25.012h-11.4m0 16.988V25.012M13.055 42V25.012m0 16.988H1.656V25.012h11.4m0 0h19.201M20.835 0v4.887L12.55 11.62a.07.07 0 0 0 .024.095.07.07 0 0 0 .035.01H32.75a.07.07 0 0 0 .068-.07.07.07 0 0 0-.01-.035l-8.225-6.732V0M13.055 29.876H1.656m42 0H32.257m-15.171-.682h11.14v8.87h-11.14v-8.87Z"
      />
      <Circle cx={7.308} cy={33.112} r={0.808} fill="#DCBEB6" />
      <Circle cx={38.003} cy={33.112} r={0.808} fill="#DCBEB6" />
      <Circle
        cx={0.808}
        cy={0.808}
        r={0.808}
        fill="#DCBEB6"
        transform="matrix(1 0 0 -1 17 22.617)"
      />
      <Circle
        cx={0.808}
        cy={0.808}
        r={0.808}
        fill="#DCBEB6"
        transform="matrix(1 0 0 -1 26.695 22.617)"
      />
      <Circle
        cx={0.808}
        cy={0.808}
        r={0.808}
        fill="#DCBEB6"
        transform="matrix(1 0 0 -1 21.852 22.617)"
      />
    </Svg>
  );
};
export default KitchenIcon;
