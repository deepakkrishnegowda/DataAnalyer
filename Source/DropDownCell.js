import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class DropDownCell extends Component {
  render() {
    return (
      <View style={[this.props.style, styles.selectedViewStyle]}>
        <Text style={styles.selectedTextStyle}>{this.props.selectedText}</Text>
        <Icon
          name="sort-desc"
          size={25}
          color="#000"
          style={{paddingBottom: 8}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {},
  headerTextStyle: {
    color: '#888888',
    fontSize: 16,
  },
  selectedTextStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedViewStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
