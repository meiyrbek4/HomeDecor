import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/BottomScreens/Home';
import HomeIcon from '../ui/icons/HomeIcon';
import Categories from '../Screens/BottomScreens/Categories';
import Cart from '../Screens/BottomScreens/Cart';
import Wishlist from '../Screens/BottomScreens/Wishlist';
import Profile from '../Screens/BottomScreens/Profile';
import CategoriesIcon from '../ui/icons/CategoriesIcon';
import CartIcon from '../ui/icons/CartIcon';
import WishlistIcon from '../ui/icons/WishlistIcon';
import ProfileIcon from '../ui/icons/ProfileIcon';

import {useAtomTheme} from '../contexts/AtomThemeContext';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const themeNow = useAtomTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
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
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
