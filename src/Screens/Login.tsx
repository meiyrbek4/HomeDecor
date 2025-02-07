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
import {AppStackParamList} from '../navigation/AppNavigator';
import {colors} from '../theme/colors';
import {Controller, useForm} from 'react-hook-form';
import {LeagueSpartan} from '../theme/fontFamily';
import {fontSize, spacing} from '../theme/dimensions';
import GoogleIcon from '../assets/icons/Social/GoogleIcon';
import FacebookIcon from '../assets/icons/Social/FacebookIcon';
import {useAtomValue} from 'jotai';
import {palette, theme} from '../store/themeAtomsSlice';
import Texts from '../components/Texts';
import Button from '../components/Button';

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
    // handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  // const onSubmit = (data: FormData) => console.log(data);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: themeNow.background}]}>
      <View style={styles.wrapper}>
        <View style={styles.welcomeText}>
          <Texts variant="title" type="primary">
            Welcome
          </Texts>
          <Texts variant="subtext" type="primary">
            Please enter your details to proceed.
          </Texts>
        </View>
        <View style={styles.form}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={styles.inputWrapper}>
                <Texts variant="subtitle" type="primary">
                  Username or Email
                </Texts>
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
                <Texts variant="subtitle" type="primary">
                  Password
                </Texts>
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
          <Button
            variant="primary"
            contentWidth={width}
            onPress={() => navigation.navigate('TabNavigator')}>
            Log in
          </Button>
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
