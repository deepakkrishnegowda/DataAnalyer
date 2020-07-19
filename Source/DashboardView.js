import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {Pages} from 'react-native-pages';
import DataListView from './DataListView';

const MainContentItem = ({title}) => (
  <View style={styles.pageContainer}>
    <View style={styles.page}>
      <Text>{title}</Text>
    </View>
  </View>
);

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
      return <MainContentItem title={item} key={item + index} />;
    });
    return mainContent;
  }
}
const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 30,
    marginHorizontal: 10,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
  },
});
