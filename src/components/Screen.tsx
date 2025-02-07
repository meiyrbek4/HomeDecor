import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useAtomTheme} from '../contexts/AtomThemeContext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 120;
const wrapper = width * 0.9;

interface Props {
  gap?: number;
  paddingVertical?: number;
}

const Screen = ({
  gap = 30,
  paddingVertical = 20,
  children,
}: PropsWithChildren<Props>) => {
  const themeNow = useAtomTheme();
  return (
    <View style={{backgroundColor: themeNow.background}}>
      <SafeAreaView
        style={[styles.container, {backgroundColor: themeNow.background}]}>
        <View style={[styles.wrapper, {gap, paddingVertical}]}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  wrapper: {
    alignSelf: 'center',
    width: wrapper,
    height: height,

    paddingVertical: 20,
  },
});
