import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import LivingRoomIcon from '..//assets/icons/TopMenuIcons/LivingRoom';
import TopMenuButton from '../components/TopMenu/TopMenuButton';
import BedroomIcon from '..//assets/icons/TopMenuIcons/BedroomIcon';
import DiningRoomIcon from '..//assets/icons/TopMenuIcons/DiningRoomIcon';
import KitchenIcon from '../assets/icons/TopMenuIcons/KitchenIcon';
import OfficeIcon from '../assets/icons/TopMenuIcons/OfficeIcon';

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
      contentContainerStyle={styles.scrollContainer}>
      {topMenuIcons.map((Icon, index) => (
        <TopMenuButton key={index}>
          <Icon />
        </TopMenuButton>
      ))}
    </ScrollView>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  scrollContainer: {gap: 15},
});
