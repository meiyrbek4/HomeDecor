import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import CardDetails from '../screens/CardDetails';
import Home from '../screens/BottomScreens/Home';
import {Furniture} from '../types/types';
import {useAtomTheme} from '../contexts/AtomThemeContext';
import {colors} from '../theme/colors';

type HomeStack = {
  Home: undefined;
  CardDetails: {collection: Furniture};
};

export type HomeStackParamList = NativeStackNavigationProp<HomeStack>;

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const themeNow = useAtomTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
