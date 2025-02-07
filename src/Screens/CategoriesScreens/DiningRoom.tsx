import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import {colors} from '../../theme/colors';
import {LeagueSpartan} from '../../theme/fontFamily';
import {fontSize} from '../../theme/dimensions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 250;
const oneHeight = height / 5;
const wrapper = width * 0.9;
const gap = 15;

const DiningRoom = () => {
  return (
    <Screen gap={15} paddingVertical={20}>
      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <View style={[styles.bg, styles.one]}>
            <Text style={styles.text}>Chairs</Text>
          </View>
          <View style={[styles.bg, styles.two]}>
            <Text style={styles.text}>Storage</Text>
          </View>
          <View style={[styles.bg, styles.two]}>
            <Text style={styles.text}>Dining Tables</Text>
          </View>
        </View>
        <View style={styles.halfWidth}>
          <View style={[styles.bg, styles.one]}>
            <Text style={styles.text}>Tables</Text>
          </View>
          <View style={[styles.bg, styles.one]}>
            <Text style={styles.text}>Decorative Light</Text>
          </View>
          <View style={[styles.bg, styles.three]}>
            <Text style={styles.text}>Decor</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default DiningRoom;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap,
  },
  fullWidth: {
    width: wrapper,
  },
  halfWidth: {
    width: wrapper / 2 - gap / 2,
    gap,
  },
  bg: {
    backgroundColor: colors.salmon,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
  },
  one: {
    height: oneHeight,
  },
  two: {
    height: oneHeight * 2,
  },
  three: {
    height: oneHeight * 3,
  },
  text: {
    fontFamily: LeagueSpartan.light,
    fontSize: fontSize.lg,
    color: colors.white,
    textAlign: 'center',
  },
});
