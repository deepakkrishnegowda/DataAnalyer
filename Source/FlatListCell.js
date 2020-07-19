import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

export default class FlatListCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.childItem}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 3,
    height: 180,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
  },
  childItem: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
  }
});
