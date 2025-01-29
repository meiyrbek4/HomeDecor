import {useAtomValue} from 'jotai';
import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {palette, theme} from '../../config/atoms';

const GoogleIcon = (props: any) => {
  const atomTheme = useAtomValue(theme);
  const atomPalette = useAtomValue(palette);
  const themeNow = atomPalette[atomTheme];
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      // viewBox="0 0 34 34"
      fill="none"
      {...props}>
      <Circle cx={17.3105} cy={17.3828} r={16} stroke={themeNow.icon} />
      <Path
        d="M22.5862 11.074C21.2023 9.79914 19.4218 9.03931 17.5437 8.92216C15.6657 8.805 13.8046 9.33766 12.2729 10.4307C10.7412 11.5237 9.63232 13.1105 9.13241 14.9245C8.63251 16.7386 8.77206 18.6694 9.52763 20.3927C10.2832 22.116 11.6088 23.5269 13.2817 24.3883C14.9546 25.2496 16.873 25.5091 18.7147 25.1231C20.5563 24.7372 22.2091 23.7292 23.3953 22.2685C24.5816 20.8079 25.2291 18.9835 25.2291 17.1018L17.0335 17.1018"
        stroke={themeNow.icon}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GoogleIcon;
