import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../Navigations/AppNavigator';
import {colors} from '../constants/colors';
import {Controller, useForm} from 'react-hook-form';
import Title from '../ui/text/TitleBlack';
import Subtext from '../ui/text/Subtext';
import SubtitleBlack from '../ui/text/SubtitleBlack';
import ButtonPrimary from '../ui/ButtonPrimary';
import {LeagueSpartan} from '../constants/fontFamily';
import {fontSize, spacing} from '../constants/dimensions';
import GoogleIcon from '../ui/icons/Social/GoogleIcon';
import FacebookIcon from '../ui/icons/Social/FacebookIcon';
import {useAtomValue} from 'jotai';
import {palette, theme} from '../config/atoms';

type FormData = {
  email: string;
  password: string;
};

const width = Dimensions.get('window').width;

const Login = () => {
  const navigation = useNavigation<AppStackParamList>();
  const atomTheme = useAtomValue(theme);
  const atomPalette = useAtomValue(palette);
  const themeNow = atomPalette[atomTheme];

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: themeNow.background}]}>
      <View style={styles.wrapper}>
        <View style={styles.welcomeText}>
          <Title>Welcome</Title>
          <Subtext>Please enter your details to proceed.</Subtext>
        </View>
        <View style={styles.form}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={styles.inputWrapper}>
                <SubtitleBlack>Username or Email</SubtitleBlack>
                <TextInput
                  placeholder="example@example.com"
                  placeholderTextColor={colors.brownRosy}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              </View>
            )}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={styles.inputWrapper}>
                <SubtitleBlack>Password</SubtitleBlack>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={colors.brownRosy}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              </View>
            )}
            name="password"
          />
          {errors.password && <Text>This is required.</Text>}
        </View>
      </View>

      <View style={styles.bottomWrapper}>
        <View style={styles.bottomWrapperItem}>
          <ButtonPrimary
            contentWidth={width}
            onPress={() => navigation.navigate('TabNavigator')}>
            Log in
          </ButtonPrimary>
          <Text style={[styles.forgotPass, {color: themeNow.primaryText}]}>
            Forgot password?
          </Text>
        </View>
        <View style={styles.bottomWrapperItem}>
          <Text style={[styles.signupText, {color: themeNow.primaryText}]}>
            or sign up with
          </Text>
          <View style={styles.icons}>
            <FacebookIcon />
            <GoogleIcon />
          </View>
          <Text
            style={[styles.dontHaveAccountText, {color: themeNow.primaryText}]}>
            Don't have an account?{' '}
            <Text style={styles.secondarySignupText}>Sign up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    width: width * 0.85,
    justifyContent: 'space-between',
    paddingVertical: spacing.xl,
  },
  bottomWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.xl,
  },
  forgotPass: {
    fontFamily: LeagueSpartan.semibold,
    fontSize: fontSize.subtext,
  },
  input: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.beige,
    borderRadius: 25,
  },
  welcomeText: {
    paddingVertical: spacing.lg,
    gap: spacing.sm,
  },
  form: {
    gap: spacing.lg,
  },
  inputWrapper: {
    gap: spacing.sm,
  },
  signupText: {
    fontFamily: LeagueSpartan.light,
    fontSize: fontSize.paragraph,
    color: colors.black,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.lg,
  },
  dontHaveAccountText: {
    fontFamily: LeagueSpartan.light,
    fontSize: fontSize.paragraph,
    color: colors.black,
  },
  secondarySignupText: {
    color: colors.salmon,
  },
  bottomWrapperItem: {
    alignItems: 'center',
    gap: spacing.md,
  },
});
