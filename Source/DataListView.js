import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import FlatListCell from './FlatListCell';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class DataListView extends Component {
  render() {
    return (
      <View>
        <FlatList
          pagingEnabled={true}
          numColumns={3}
          data={this.props.dataItems}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.onPress(item.item)
                }}>
                <FlatListCell title={item.item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}