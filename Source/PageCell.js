import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const PageCell = ({title}) => (
    <View style={styles.pageContainer}>
      <View style={styles.page}>
        <Text>{title}</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    pageContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingVertical: 30,
      marginHorizontal: 10,
    },
    page: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffff',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowOffset: {width: 0, height: 1},
    },
  });
  