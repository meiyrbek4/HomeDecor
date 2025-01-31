import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Collection} from '../../screens/BottomScreens/Home';
import {cardStyle} from '../../constants/cardStyle';

import {LeagueSpartan} from '../../constants/fontFamily';
import SubtitleBlack from '../text/SubtitleBlack';
import {useAtomTheme} from '../../contexts/AtomThemeContext';
import Divider from '../Divider';
import {formatCurrency} from '../../utils/helpers';
import AddToCart from '../AddToCart';
import AddToFavorites from '../AddToFavorites';

interface Props {
  collection: Collection;
  wrapperWidth: number;
}

const Card = ({collection, wrapperWidth}: Props) => {
  const themeNow = useAtomTheme();
  return (
    <View style={cardStyle(wrapperWidth)}>
      <Image source={collection.image} style={{width: '100%'}} />
      <SubtitleBlack>{collection.title}</SubtitleBlack>
      <Text style={[styles.description, {color: themeNow.primaryText}]}>
        {collection.description}
      </Text>
      <Divider />
      <View style={styles.footerWrapper}>
        <SubtitleBlack>{formatCurrency(collection.price)}</SubtitleBlack>
        <View style={styles.btnWrapper}>
          <AddToFavorites />
          <AddToCart />
        </View>
      </View>
    </View>
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
});
