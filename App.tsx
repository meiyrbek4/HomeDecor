import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {colors} from './src/constants/colors';
import ButtonPrimary from './src/components/ButtonPrimary';
import ButtonSecondary from './src/components/ButtonSecondary';
import {LeagueSpartan} from './src/constants/fontFamily';
import {fontSize} from './src/constants/dimensions';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/launch_bg.png')}
        resizeMode="contain"
        style={styles.bgImage}>
        <View style={styles.launchContent}>
          <Text style={styles.launchHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.{' '}
          </Text>

          <View style={styles.btnContainer}>
            <ButtonPrimary>Log in</ButtonPrimary>
            <ButtonSecondary>Sign up</ButtonSecondary>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width,
  },
  launchContent: {
    height: height / 3,
    width: (width / 10) * 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  launchHeading: {
    fontFamily: LeagueSpartan.regular,
    fontSize: fontSize.md,
    textAlign: 'center',
  },
  btnContainer: {
    gap: 10,
  },
});
