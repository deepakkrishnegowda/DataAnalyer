import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export const PageCell = ({title}) => (
  <View style={styles.pageContainer}>
    <View style={styles.page}>
      <View style={{flex: 0.7}}>
        <Image
          source={require('../Assets/philips_logo.png')}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 30,
    marginHorizontal: 10,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
