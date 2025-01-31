import {ScrollView} from 'react-native';
import React from 'react';
import LivingRoomIcon from '../../icons/TopMenuIcons/LivingRoom';
import TopMenuButton from './TopMenuButton';
import BedroomIcon from '../../icons/TopMenuIcons/BedroomIcon';
import DiningRoomIcon from '../../icons/TopMenuIcons/DiningRoomIcon';
import KitchenIcon from '../../icons/TopMenuIcons/KitchenIcon';
import OfficeIcon from '../../icons/TopMenuIcons/OfficeIcon';

const topMenuIcons = [
  LivingRoomIcon,
  BedroomIcon,
  DiningRoomIcon,
  KitchenIcon,
  OfficeIcon,
];

const TopMenu = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 15}}>
      {topMenuIcons.map((Icon, index) => (
        <TopMenuButton key={index}>
          <Icon />
        </TopMenuButton>
      ))}
    </ScrollView>
  );
};

export default TopMenu;
