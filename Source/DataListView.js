import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';

const BottomContentItem = ({title}) => (
    <View style={styles.bottomItem}>
      <View style = {{ borderWidth:1, flex:1, justifyContent:'center', borderRadius:8}}>
      <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
  

export default class DataListView extends Component {
  render() {
    return (
      <View>
        <FlatList
          pagingEnabled={true}
          numColumns = {3}
          data={this.props.dataItems}
          renderItem={BottomContentItem}
          keyExtractor={(item, index) => item+index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bottomItem: {
    width: Dimensions.get('window').width / 3 ,
    height: 180,
    justifyContent:'center',
    padding: 8,
    borderRadius: 10
  },
});
