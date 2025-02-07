import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../navigation/AppNavigator';
import {colors} from '../theme/colors';
import Texts from '../components/Texts';
import {useAtomTheme} from '../contexts/AtomThemeContext';
import Divider from '../components/Divider';
import {formatCurrency} from '../helpers/formattings';
import Button from '../components/Button';
import FavoriteIcon from '../assets/icons/FavoriteIcon';
import AddIcon from '../assets/icons/AddIcon';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 140;
const wrapper = width * 0.9;

const CardDetails = ({route}) => {
  const {collection} = route.params;
  const navigation = useNavigation<AppStackParamList>();
  const themeNow = useAtomTheme();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: collection.type[0].toUpperCase() + collection.type.slice(1),
    });
  }, [collection.type, navigation]);
  return (
    <View style={{backgroundColor: themeNow.background}}>
      <SafeAreaView
        style={(styles.container, {backgroundColor: themeNow.background})}>
        <View style={styles.wrapper}>
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
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Button variant="secondary" contentWidth={wrapper}>
              Add to Cart
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  container: {
    width: width,
    // height: height,
  },
  wrapper: {
    alignSelf: 'center',
    width: wrapper,
    height: height,

    paddingVertical: 20,
    gap: 30,
  },
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
    height: 250,
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
