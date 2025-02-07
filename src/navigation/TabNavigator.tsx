import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/BottomMenuIcons/HomeIcon';
import Categories from '../screens/BottomScreens/Categories';
import Cart from '../screens/BottomScreens/Cart';
import Wishlist from '../screens/BottomScreens/Wishlist';
import Profile from '../screens/BottomScreens/Profile';
import CategoriesIcon from '../assets/icons/BottomMenuIcons/CategoriesIcon';
import CartIcon from '../assets/icons/BottomMenuIcons/CartIcon';
import WishlistIcon from '../assets/icons/BottomMenuIcons/WishlistIcon';
import ProfileIcon from '../assets/icons/BottomMenuIcons/ProfileIcon';

import {useAtomTheme} from '../contexts/AtomThemeContext';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const themeNow = useAtomTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'HomeNavigator') {
            iconName = focused ? (
              <HomeIcon color={themeNow.activeElement} />
            ) : (
              <HomeIcon color={themeNow.inactiveElement} />
            );
          } else if (route.name === 'Categories') {
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
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
