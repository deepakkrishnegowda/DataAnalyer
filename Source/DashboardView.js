import React, {Component} from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import {Pages} from 'react-native-pages';
import DataListView from './DataListView';
import {PageCell} from './PageCell';

export default class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e0e0e0'}}>
        <View style={{flex: 0.3}}>
          <Pages
            indicatorColor={'#000'}
            onScrollEnd={(activeIndex) => {
              if (activeIndex != this.state.currentIndex) {
                this.setState({currentIndex: activeIndex});
              }
            }}>
            {this.getMainContents(['CID', 'KM', 'People'])}
          </Pages>
        </View>
        <View style={{flex: 0.7}}>
          <DataListView
            dataItems={this.getDataForCurrentIndex(this.state.currentIndex)}
            onPress={(item) => {
              this.props.navigation.navigate('DashboardDetails', {title: item});
            }}
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

  getDataForCurrentIndex(index) {
    switch (index) {
      case 0:
        return ['People', 'CID', 'CID', 'CID', 'People', 'CID', 'CID'];
      case 1:
        return ['People', 'CID', 'CID'];
      case 2:
        return ['People', 'CID', 'CID', 'CID'];
    }
  }
}
