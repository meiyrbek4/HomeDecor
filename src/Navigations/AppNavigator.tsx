import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding from '../Screens/OnBoarding';
import Launch from '../Screens/Launch';
import Login from '../Screens/Login';
import TabNavigator from './TabNavigator';
import {useAtomTheme} from '../contexts/AtomThemeContext';
import {colors} from '../constants/colors';

type AppStack = {
  Onboarding: undefined;
  Launch: undefined;
  Login: undefined;
  TabNavigator: undefined;
};

export type AppStackParamList = NativeStackNavigationProp<AppStack>;

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const themeNow = useAtomTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: themeNow.background,
          },
          headerTintColor: themeNow.primaryText,
          headerTitleStyle: {
            color: colors.salmon,
          },
          headerBackButtonDisplayMode: 'minimal',
        }}>
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
