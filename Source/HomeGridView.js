import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import HomeGridCell from './HomeGridCell';

export default class DashboardGridView extends Component {
  render() {
    return (
      <View style={[this.props.style, styles.containerStyle]}>
        <Text style={styles.titleStyle}>{this.props.item.title}</Text>
        <FlatList
          style={styles.flatListStyle}
          pagingEnabled={true}
          numColumns={2}
          data={this.props.item.services}
          renderItem={(item) => {
            return <HomeGridCell title={item.item} />;
          }}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth:1,
    borderColor: '#CAE3E9',
  },
  titleStyle: {
    fontSize: 20,
    paddingLeft: 8,
    color: '#005A8B',
  },
  flatListStyle: {
    paddingTop: 8,
  },
});
