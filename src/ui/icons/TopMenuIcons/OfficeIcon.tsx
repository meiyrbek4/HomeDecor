import React from 'react';
import Svg, {Path} from 'react-native-svg';

const OfficeIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={41}
      fill="none"
      {...props}>
      <Path
        stroke="#DCBEB6"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M27.283 29.659H4.745m.667-6.113h21.204m-10.602-5.255v5.22m0 6.148v11.24m-5.34.029a5.383 5.383 0 0 1 .415-2.108 5.354 5.354 0 0 1 4.918-3.267 5.34 5.34 0 0 1 5.34 5.347m4.201-22.61V7.05a5.424 5.424 0 0 0-5.424-5.417h-8.22A5.424 5.424 0 0 0 6.48 7.05v11.24h19.068ZM31 19.33a2.192 2.192 0 1 0-4.384 0V29.66H31V19.33Zm-25.588 0A2.192 2.192 0 0 0 3.22 17.14 2.19 2.19 0 0 0 1 19.33v10.328h4.384l.028-10.328Z"
      />
    </Svg>
  );
};
export default OfficeIcon;
