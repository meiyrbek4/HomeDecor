import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Collection} from '../Screens/BottomScreens/Home';
import {cardStyle} from '../constants/cardStyle';
import {SubtitleBlack} from '../constants/textStyles';
import {LeagueSpartan} from '../constants/fontFamily';

interface Props {
  collection: Collection;
  wrapperWidth: number;
}

const Card = ({collection, wrapperWidth}: Props) => {
  return (
    <View style={cardStyle(wrapperWidth)}>
      <Image source={collection.image} style={{width: '100%'}} />
      <Text style={SubtitleBlack}>{collection.title}</Text>
      <Text style={styles.description}>{collection.description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  description: {
    fontFamily: LeagueSpartan.light,
    fontSize: 12,
  },
});
