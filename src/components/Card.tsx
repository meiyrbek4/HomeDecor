import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {cardStyle} from '../constants/CardStyle';

import {LeagueSpartan} from '../theme/fontFamily';
import {useAtomTheme} from '../contexts/AtomThemeContext';
import Divider from './Divider';
import {formatCurrency, paragraphSlicer} from '../helpers/formattings';

import Texts from './Texts';
import Button from './Button';
import FavoriteIcon from '../assets/icons/FavoriteIcon';
import AddIcon from '../assets/icons/AddIcon';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../navigation/AppNavigator';
import {Furniture} from '../types/types';

interface Props {
  collection: Furniture;
  wrapperWidth: number;
}

const Card = ({collection, wrapperWidth}: Props) => {
  const navigation = useNavigation<AppStackParamList>();
  const themeNow = useAtomTheme();

  return (
    <Pressable
      style={cardStyle(wrapperWidth)}
      onPress={() => navigation.navigate('CardDetails', {collection})}>
      <Image source={{uri: collection.image}} style={styles.image} />
      <Texts variant="subtitle" type="secondary">
        {collection.title}
      </Texts>
      <Text style={[styles.description, {color: themeNow.primaryText}]}>
        {paragraphSlicer(collection.description, 60)}
        ...
      </Text>
      <Divider size="sm" />
      <View style={styles.footerWrapper}>
        <Texts variant="subtitle" type="primary">
          {formatCurrency(collection.price)}
        </Texts>
        <View style={styles.btnWrapper}>
          <Button variant="rounded" size={20}>
            <FavoriteIcon />
          </Button>

          <Button variant="rounded" size={20}>
            <AddIcon />
          </Button>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  description: {
    fontFamily: LeagueSpartan.light,
    fontSize: 12,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 5,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
  },
});
