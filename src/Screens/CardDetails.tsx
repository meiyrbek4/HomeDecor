import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../navigation/AppNavigator';
import {colors} from '../theme/colors';
import Texts from '../components/Texts';
import Divider from '../components/Divider';
import {formatCurrency} from '../helpers/formattings';
import Button from '../components/Button';
import FavoriteIcon from '../assets/icons/FavoriteIcon';
import AddIcon from '../assets/icons/AddIcon';
import Screen from '../components/Screen';
import StarRating from '../components/StarRating';

const width = Dimensions.get('window').width;
const wrapper = width * 0.9;

const CardDetails = ({route}) => {
  const [rating, setRating] = useState<number>(0);
  const {collection} = route.params;
  const navigation = useNavigation<AppStackParamList>();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: collection.type[0].toUpperCase() + collection.type.slice(1),
    });
  }, [collection.type, navigation]);
  return (
    <Screen>
      <View style={styles.imageWrapper}>
        <Image source={{uri: collection.image}} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Texts variant="title" type="secondary">
          {collection.title}
        </Texts>
        <Texts variant="paragraph" type="primary">
          {collection.description}
        </Texts>

        <Divider size="md" />
        <View>
          <View style={styles.row}>
            <Texts variant="title" type="primary">
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
          <View style={styles.row}>
            <Texts variant="subtext" type="primary">
              User reviews
            </Texts>
            <StarRating
              ratingStars={5}
              size={20}
              defaultRating={collection.review}
              onSetRating={setRating}
            />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button variant="secondary" contentWidth={wrapper}>
          Add to Cart
        </Button>
      </View>
    </Screen>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  content: {
    gap: 10,
  },
  imageWrapper: {
    backgroundColor: colors.beige,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 300,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 5,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    height: 60,
  },
});
