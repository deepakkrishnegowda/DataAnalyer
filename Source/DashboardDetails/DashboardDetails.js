import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DashboardDetails extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({title: 'Updated!'});
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
