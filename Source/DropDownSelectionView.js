import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownCell from './DropDownCell';

export default class DropDownSelectionView extends Component {
  render() {
    return (
      <View
        style={[ this.props.style, styles.containerStyle]}>
        <DropDownCell
          style={{flex: 0.5}}
          selectedText="Market"
        />
        <View style={styles.separatorStyle} />
        <DropDownCell
          style={{flex: 0.5}}
          selectedText="Section"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#CAE3E9',
      },
      separatorStyle: {
          width: 1, 
          backgroundColor: '#888888', 
          marginVertical: 16
        }
})