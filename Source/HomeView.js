import React, {Component} from 'react';
import {Text, View, SafeAreaView, Button, FlatList} from 'react-native';
import DropDownSelectionView from './DropDownSelectionView';
import HomeGridView from './HomeGridView';
import jsonData from './Json/WOWApp.json';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
        <View
          style={{
            backgroundColor: '#005A8B',
            height: 60,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
          <Icon name="bars" size={25} color="#ffff" style={{paddingLeft: 16}} />
          <Icon name="filter" size={25} color="#ffff" style={{paddingRight: 16}} />
        </View>
        <DropDownSelectionView />
        <FlatList
          style={{flex: 1}}
          numColumns={1}
          data={jsonData.Markets}
          renderItem={(item) => {
            return <HomeGridView item={item.item} />;
          }}
          keyExtractor={(item, index) => item + index}
        />
      </SafeAreaView>
    );
  }
}
