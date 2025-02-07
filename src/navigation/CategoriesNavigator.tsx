import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';

import {useAtomTheme} from '../contexts/AtomThemeContext';
import {colors} from '../theme/colors';
import Bedroom from '../screens/CategoriesScreens/Bedroom';
import LivingRoom from '../screens/CategoriesScreens/LivingRoom';
import Kitchen from '../screens/CategoriesScreens/Kitchen';
import Office from '../screens/CategoriesScreens/Office';
import DiningRoom from '../screens/CategoriesScreens/DiningRoom';

export type CategoriesStack = {
  Bedroom: undefined;
  LivingRoom: undefined;
  Kitchen: undefined;
  DiningRoom: undefined;
  Office: undefined;
};

export type CategoriesStackParamList =
  NativeStackNavigationProp<CategoriesStack>;

const Stack = createNativeStackNavigator();

const CategoriesNavigator = () => {
  const themeNow = useAtomTheme();
  return (
    <Stack.Navigator
      initialRouteName="Bedroom"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themeNow.background,
        },
        headerTintColor: themeNow.primaryText,
        headerTitleStyle: {
          color: colors.salmon,
        },
        headerBackButtonDisplayMode: 'minimal',
      }}>
      <Stack.Screen name="Bedroom" component={Bedroom} />
      <Stack.Screen
        name="LivingRoom"
        component={LivingRoom}
        options={{
          headerTitle: 'Living Room',
        }}
      />
      <Stack.Screen name="Kitchen" component={Kitchen} />
      <Stack.Screen
        name="DiningRoom"
        component={DiningRoom}
        options={{
          headerTitle: 'Dining Room',
        }}
      />
      <Stack.Screen name="Office" component={Office} />
    </Stack.Navigator>
  );
};

export default CategoriesNavigator;
