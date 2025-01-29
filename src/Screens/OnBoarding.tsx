import React, {useCallback} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import Onboarding, {
  DoneButtonProps,
  NextButtonProps,
} from 'react-native-onboarding-swiper';
import ButtonPrimary from '../ui/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/dimensions';
import {Poppins} from '../constants/fontFamily';
import {AppStackParamList} from '../Navigations/AppNavigator';
import {useAtomValue} from 'jotai';
import {palette, theme} from '../config/atoms';

const OnBoarding = () => {
  const navigation = useNavigation<AppStackParamList>();
  const atomTheme = useAtomValue(theme);
  const atomColors = useAtomValue(palette);
  const themeNow = atomColors[atomTheme];

  const nextBtn = useCallback(({onPress, nextLabel}: NextButtonProps) => {
    return (
      <ButtonPrimary onPress={onPress} contentWidth={200}>
        {nextLabel}
      </ButtonPrimary>
    );
  }, []);

  const doneBtn = useCallback(({onPress}: DoneButtonProps) => {
    return (
      <ButtonPrimary onPress={onPress} contentWidth={280}>
        Get started
      </ButtonPrimary>
    );
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: themeNow.background}]}>
      <Onboarding
        pages={[
          {
            backgroundColor: themeNow.background,
            image: (
              <Image
                source={require('../../assets/onBoardingScreens/onBoard_1.png')}
                style={styles.image}
              />
            ),

            title: 'Confortable Space',
            subtitle:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            backgroundColor: themeNow.background,
            image: (
              <Image
                source={require('../../assets/onBoardingScreens/onBoard_2.png')}
                style={styles.image}
              />
            ),
            title: 'Modern Design',
            subtitle:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            backgroundColor: themeNow.background,
            image: (
              <Image
                source={require('../../assets/onBoardingScreens/onBoard_3.png')}
                style={styles.image}
              />
            ),
            title: 'Styled Living',
            subtitle:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            backgroundColor: themeNow.background,
            image: (
              <Image
                source={require('../../assets/onBoardingScreens/onBoard_4.png')}
                style={styles.image}
              />
            ),
            title: 'Relaxing Furniture',
            subtitle:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
        ]}
        containerStyles={styles.containerStyles}
        imageContainerStyles={{
          ...styles.imageContainerStyles,
          backgroundColor: themeNow.itemBackground,
        }}
        NextButtonComponent={nextBtn}
        DoneButtonComponent={doneBtn}
        titleStyles={styles.titleStyles}
        subTitleStyles={(styles.subtitleStyles, {color: themeNow.primaryText})}
        bottomBarColor={themeNow.background}
        onDone={() => {
          navigation.navigate('Login');
        }}
        onSkip={() => {
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyles: {
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
  },
  imageContainerStyles: {
    borderBottomLeftRadius: 20,
    paddingBottom: 30,
    marginBottom: 40,
    overflow: 'hidden',
  },
  titleStyles: {
    fontSize: fontSize.xl,
    fontFamily: Poppins.semibold,
    color: colors.salmon,
  },
  subtitleStyles: {
    fontSize: fontSize.subtext,
    fontFamily: Poppins.regular,
  },
});
