import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/BottomMenuIcons/HomeIcon';
import Cart from '../screens/BottomScreens/Cart';
import Wishlist from '../screens/BottomScreens/Wishlist';
import Profile from '../screens/BottomScreens/Profile';
import CategoriesIcon from '../assets/icons/BottomMenuIcons/CategoriesIcon';
import CartIcon from '../assets/icons/BottomMenuIcons/CartIcon';
import WishlistIcon from '../assets/icons/BottomMenuIcons/WishlistIcon';
import ProfileIcon from '../assets/icons/BottomMenuIcons/ProfileIcon';

import {useAtomTheme} from '../contexts/AtomThemeContext';
import HomeNavigator from './HomeNavigator';
import {colors} from '../theme/colors';
import CategoriesNavigator, {CategoriesStack} from './CategoriesNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';

type TabStack = {
  HomeNavigator: undefined;
  CategoriesNavigator: NavigatorScreenParams<CategoriesStack>;
  Wishlist: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type TabStackParamList = BottomTabNavigationProp<TabStack>;

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const themeNow = useAtomTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: themeNow.background,
        },
        headerTintColor: themeNow.primaryText,
        headerTitleStyle: {
          color: colors.salmon,
        },
        headerBackButtonDisplayMode: 'minimal',
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'HomeNavigator') {
            iconName = focused ? (
              <HomeIcon color={themeNow.activeElement} />
            ) : (
              <HomeIcon color={themeNow.inactiveElement} />
            );
          } else if (route.name === 'CategoriesNavigator') {
            iconName = focused ? (
              <CategoriesIcon color={themeNow.activeElement} />
            ) : (
              <CategoriesIcon color={themeNow.inactiveElement} />
            );
          } else if (route.name === 'Cart') {
            iconName = focused ? (
              <CartIcon color={themeNow.activeElement} />
            ) : (
              <CartIcon color={themeNow.inactiveElement} />
            );
          } else if (route.name === 'Wishlist') {
            iconName = focused ? (
              <WishlistIcon color={themeNow.activeElement} />
            ) : (
              <WishlistIcon color={themeNow.inactiveElement} />
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? (
              <ProfileIcon color={themeNow.activeElement} />
            ) : (
              <ProfileIcon color={themeNow.inactiveElement} />
            );
          }
          return iconName;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 35,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: themeNow.background,
          height: 60,
          alignItems: 'center',
        },
      })}>
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tab.Screen name="CategoriesNavigator" component={CategoriesNavigator} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
