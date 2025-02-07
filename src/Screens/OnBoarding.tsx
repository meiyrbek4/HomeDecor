import React, {useCallback} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import Onboarding, {
  DoneButtonProps,
  NextButtonProps,
} from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../theme/colors';
import {fontSize} from '../theme/dimensions';
import {LeagueSpartan, Poppins} from '../theme/fontFamily';
import {AppStackParamList} from '../navigation/AppNavigator';
import {useAtomValue} from 'jotai';
import {palette, theme} from '../store/themeAtomsSlice';
import Button from '../components/Button';

const OnBoarding = () => {
  const navigation = useNavigation<AppStackParamList>();
  const atomTheme = useAtomValue(theme);
  const atomColors = useAtomValue(palette);
  const themeNow = atomColors[atomTheme];

  const nextBtn = useCallback(({onPress, nextLabel}: NextButtonProps) => {
    return (
      <Button variant="primary" onPress={onPress} contentWidth={200}>
        {nextLabel}
      </Button>
    );
  }, []);

  const doneBtn = useCallback(({onPress}: DoneButtonProps) => {
    return (
      <Button variant="primary" onPress={onPress} contentWidth={280}>
        Get started
      </Button>
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
                source={{
                  uri: 'https://res.cloudinary.com/dawklruhy/image/upload/f_auto,q_auto/r8gmpjysduk5hwtmfrge',
                }}
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
                source={{
                  uri: 'https://res.cloudinary.com/dawklruhy/image/upload/f_auto,q_auto/yb4pvoqbnopzw3wzajkp',
                }}
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
                source={{
                  uri: 'https://res.cloudinary.com/dawklruhy/image/upload/f_auto,q_auto/czisjaz7fbnbnk14lwnf',
                }}
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
                source={{
                  uri: 'https://res.cloudinary.com/dawklruhy/image/upload/f_auto,q_auto/m8cbp42ssztuujewndwu',
                }}
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
    height: 510,
    resizeMode: 'contain',
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
    fontFamily: LeagueSpartan.regular,
  },
});
