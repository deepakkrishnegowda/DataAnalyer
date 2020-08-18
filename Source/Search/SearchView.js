import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class SearchView extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
            <View>
                <Text> textInComponent </Text>
            </View>
            </SafeAreaView>
        )
    }
}
