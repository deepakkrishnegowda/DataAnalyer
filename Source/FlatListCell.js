import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

export default class FlatListCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.childItem}>
          <View style = {{width: 40, height: 40, borderWidth: 1, borderColor:'#4194d1'}}/>
          <Text style={styles.textStyle}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 2,
  },
  childItem: {
    flexDirection: 'row',
    flex: 1,
    alignContent:'flex-start',
    backgroundColor: '#fff',
    padding: 8,
  },
  textStyle: {
    fontSize: 20,
    fontWeight:'400',
    paddingHorizontal: 16, 
    color: '#2e66a0'
  }
});
