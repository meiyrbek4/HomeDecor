import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import SearchIcon from '../../ui/icons/SearchIcon';
import {SubtitleSalmon} from '../../constants/textStyles';
import {spacing} from '../../constants/dimensions';
import Card from '../../ui/Card';
import {useAtomTheme} from '../../contexts/AtomThemeContext';
import Subtext from '../../ui/text/Subtext';
import TitleSalmon from '../../ui/text/TitleSalmon';

const width = Dimensions.get('window').width;
const wrapperWidth = width * 0.9;

export interface Collection {
  image: any;
  title: string;
  description: string;
  price: number;
}

const data: Collection[] = [
  {
    image: require('../../../assets/NewCollection/AluminiumChair.jpg'),
    title: 'Aluminum Chair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 120,
  },
  {
    image: require('../../../assets/NewCollection/StylishChair.jpg'),
    title: 'Stylish Chair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 120,
  },
];

const Home = () => {
  const themeNow = useAtomTheme();
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={[styles.container, {backgroundColor: themeNow.background}]}>
      <SafeAreaView
        style={[styles.wrapper, {backgroundColor: themeNow.background}]}>
        <View style={styles.topWrapper}>
          <View style={styles.header}>
            <View>
              <TitleSalmon>Hi, Welcome Back</TitleSalmon>
              <Subtext>Create spaces that bring joy</Subtext>
            </View>
            <View style={styles.searchIconWrapper}>
              <SearchIcon color={colors.black} />
            </View>
          </View>
          <Image
            source={require('../../../assets/specialOffer.jpg')}
            style={{width: '100%'}}
          />
          <View style={styles.indicator}>
            <View style={styles.indicatorItem} />
            <View style={styles.indicatorItem} />
            <View style={styles.indicatorItem} />
          </View>
          <Text style={SubtitleSalmon}>Categories</Text>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => <View style={styles.flatlistTest} />}
            keyExtractor={item => item.toString()}
            horizontal
            contentContainerStyle={{gap: 15}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Text style={SubtitleSalmon}>Best Seller</Text>
          <Image
            source={require('../../../assets/bestSeller.png')}
            // resizeMode="stretch"

            style={{width: '100%', resizeMode: 'cover'}}
          />
        </View>
        <View style={styles.bottomWrapper}>
          <Text style={SubtitleSalmon}>New Collection</Text>
          <FlatList
            data={data}
            renderItem={({item}: {item: Collection}) => (
              <Card collection={item} wrapperWidth={wrapperWidth} />
            )}
            keyExtractor={item => item.title}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 20}} />}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
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
  searchIconWrapper: {
    backgroundColor: colors.salmon,
    padding: 15,
    borderRadius: 30,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xs,
  },
  indicatorItem: {
    width: 20,
    height: 4,
    borderRadius: 5,
    backgroundColor: colors.salmon,
  },
  flatlistTest: {
    width: 65,
    height: 65,
    borderRadius: 10,
    backgroundColor: colors.salmon,
  },

  bottomWrapper: {
    gap: spacing.md,
  },
});
