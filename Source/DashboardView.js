import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Pages} from 'react-native-pages';
import DataListView from './DataListView';
import { PageCell } from './PageCell';

export default class DashboardView extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e0e0e0'}}>
        <View style={{flex: 0.3}}>
          <Pages>{this.getMainContents(['CID', 'KM', 'People'])}</Pages>
        </View>
        <View style={{flex: 0.7}}>
          <DataListView
            dataItems={['People', 'CID', 'CID', 'CID', 'People', 'CID', 'CID']}
          />
        </View>
      </SafeAreaView>
    );
  }

  getMainContents(mainContentsArray) {
    let mainContent = mainContentsArray.map((item, index) => {
      return <PageCell title={item} key={item + index} />;
    });
    return mainContent;
  }
}