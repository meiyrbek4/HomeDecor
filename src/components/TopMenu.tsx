import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LivingRoomIcon from '..//assets/icons/TopMenuIcons/LivingRoom';
import TopMenuButton from '../components/TopMenu/TopMenuButton';
import BedroomIcon from '..//assets/icons/TopMenuIcons/BedroomIcon';
import DiningRoomIcon from '..//assets/icons/TopMenuIcons/DiningRoomIcon';
import KitchenIcon from '../assets/icons/TopMenuIcons/KitchenIcon';
import OfficeIcon from '../assets/icons/TopMenuIcons/OfficeIcon';
import {useNavigation} from '@react-navigation/native';
import {TabStackParamList} from '../navigation/TabNavigator';

const topMenuIcons = [
  LivingRoomIcon,
  BedroomIcon,
  DiningRoomIcon,
  KitchenIcon,
  OfficeIcon,
];

type Params = 'Bedroom' | 'LivingRoom' | 'Kitchen' | 'DiningRoom' | 'Office';

const params: Params[] = [
  'LivingRoom',
  'Bedroom',
  'DiningRoom',
  'Kitchen',
  'Office',
];

const TopMenu = () => {
  const navigation = useNavigation<TabStackParamList>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      {topMenuIcons.map((Icon, index) => (
        <TopMenuButton
          key={index}
          onPress={() =>
            navigation.navigate('CategoriesNavigator', {screen: params[index]})
          }
          isActive={active === index}
          setActive={() => setActive(index)}>
          <Icon isActive={active === index} />
        </TopMenuButton>
      ))}
    </ScrollView>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  scrollContainer: {gap: 15},
});
