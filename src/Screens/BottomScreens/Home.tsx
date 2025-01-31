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
import Card from '../../ui/features/Card';
import {useAtomTheme} from '../../contexts/AtomThemeContext';
import Subtext from '../../ui/text/Subtext';
import TitleSalmon from '../../ui/text/TitleSalmon';
import TopMenu from '../../ui/features/TopMenu/TopMenu';
import Indicator from '../../ui/features/Indicator';

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
    <SafeAreaView
      // contentContainerStyle={styles.contentContainer}
      style={[styles.container, {backgroundColor: themeNow.background}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}
        style={{backgroundColor: themeNow.background}}>
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
          <Indicator />
          <Text style={SubtitleSalmon}>Categories</Text>
          <TopMenu />
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
  searchIconWrapper: {
    backgroundColor: colors.salmon,
    padding: 15,
    borderRadius: 30,
  },

  bottomWrapper: {
    gap: spacing.md,
  },
});
