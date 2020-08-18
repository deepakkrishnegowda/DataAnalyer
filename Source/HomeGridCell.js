import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class HomeGridCell extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={[styles.childContainerStyle, this.props.style]}>
          <Text style={styles.titleStyle}> {this.props.title} </Text>
          <Icon
            name="sun-o"
            size={25}
            color="#005A8B"
            style={{position: 'absolute', bottom: 8, right: 8}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex:0.5,
    padding: 8,
    height: 120,
  },
  childContainerStyle: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'space-between',
    borderRadius: 5,
  },

  titleStyle: {
    fontSize: 16,
  },
});
