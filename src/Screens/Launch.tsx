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

import {LeagueSpartan} from '../theme/fontFamily';
import {fontSize} from '../theme/dimensions';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../navigation/AppNavigator';
import {useAtomValue} from 'jotai';
import {palette, theme} from '../store/themeAtomsSlice';
import Button from '../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const contentWidth = width * 0.8;

const Launch = () => {
  const navigation = useNavigation<AppStackParamList>();
  const atomTheme = useAtomValue(theme);
  const atomColors = useAtomValue(palette);
  const themeNow = atomColors[atomTheme];

  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    }
  }, []);

  const handleNavigateLogin = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: themeNow.background}]}>
      <ImageBackground
        source={require('../../assets/launch_bg.png')}
        resizeMode="contain"
        style={styles.bgImage}>
        <View style={styles.launchContent}>
          <Text
            style={[
              styles.launchHeading,
              {color: atomColors[atomTheme].primaryText},
            ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.{' '}
          </Text>

          <View style={styles.btnContainer}>
            <Button
              variant="primary"
              contentWidth={contentWidth}
              onPress={handleNavigateLogin}>
              Log in
            </Button>
            <Button variant="secondary" contentWidth={contentWidth}>
              Sign up
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Launch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width / 2,
  },
  launchContent: {
    height: height / 3,
    width: contentWidth,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  launchHeading: {
    fontFamily: LeagueSpartan.regular,
    fontSize: fontSize.subtext,
    textAlign: 'center',
  },
  btnContainer: {
    gap: 10,
  },
});
