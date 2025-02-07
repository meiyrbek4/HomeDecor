import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {colors} from '../../theme/colors';
import SearchIcon from '../../assets/icons/SearchIcon';
import {spacing} from '../../theme/dimensions';
import Card from '../../components/Card';
import {useAtomTheme} from '../../contexts/AtomThemeContext';
import TopMenu from '../../components/TopMenu';
import Indicator from '../../components/Indicator';
import Texts from '../../components/Texts';
import Button from '../../components/Button';
import {useAtom} from 'jotai';
import {loadableAsyncAtom} from '../../store/asyncAtomsSlice';
import {Furniture} from '../../types/types';

const width = Dimensions.get('window').width;
const wrapperWidth = width * 0.9;

const Home = () => {
  const themeNow = useAtomTheme();

  const Separator = useCallback(() => <View style={styles.separator} />, []);
  const [newCollection] = useAtom(loadableAsyncAtom);

  if (newCollection.state === 'hasData') {
    console.table(newCollection.data.data);
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: themeNow.background}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}
        style={{backgroundColor: themeNow.background}}>
        <View style={styles.topWrapper}>
          <View style={styles.header}>
            <View>
              <Texts variant="title" type="secondary">
                Hi, Welcome Back
              </Texts>
              <Texts variant="subtext" type="primary">
                Create spaces that bring joy
              </Texts>
            </View>
            <Button variant="rounded" size={40}>
              <SearchIcon color={colors.black} />
            </Button>
          </View>
          <Image
            source={require('../../../assets/specialOffer.jpg')}
            style={styles.specialOfferImage}
          />
          <Indicator />
          <Texts variant="subtitle" type="secondary">
            Categories
          </Texts>
          <TopMenu />
        </View>
        <View>
          <Texts variant="subtitle" type="secondary">
            Best Seller
          </Texts>
          <Image
            source={require('../../../assets/bestSeller.png')}
            style={styles.bestSellerImage}
          />
        </View>
        <View style={styles.bottomWrapper}>
          <Texts variant="subtitle" type="secondary">
            New Collection
          </Texts>

          {newCollection.state === 'loading' && <ActivityIndicator />}
          {newCollection.state === 'hasData' && (
            <FlatList
              data={newCollection.data.data}
              renderItem={({item}: {item: Furniture}) => (
                <Card collection={item} wrapperWidth={wrapperWidth} />
              )}
              keyExtractor={item => item.title}
              horizontal
              ItemSeparatorComponent={Separator}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    width: wrapperWidth,
    gap: spacing.md,
  },
  topWrapper: {
    gap: spacing.md,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomWrapper: {
    gap: spacing.md,
  },

  specialOfferImage: {
    width: '100%',
  },
  bestSellerImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  separator: {
    width: 20,
  },
});
