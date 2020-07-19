import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const MainContentItem = ({title}) => (
  <View style={styles.topItem}>
    <View style = {{ borderWidth:1, flex:1, justifyContent:'center', borderRadius:8}}>
    <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const BottomContentItem = ({title}) => (
    <View style={styles.bottomItem}>
      <View style = {{ borderWidth:1, flex:1, justifyContent:'center', borderRadius:8}}>
      <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
  


const TopRenderItem = ({item}) => <MainContentItem title={item} />;
const BottomRenderItem = ({item}) => <BottomContentItem title={item} />;
export default class Dashboard extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style = {{flex: 0.25}}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={['People', 'CID', 'CID', 'CID']}
          renderItem={TopRenderItem}
          keyExtractor={(item) => item.id}
        />
        </View>
        <View style = {{flex: 0.75}}>
        <FlatList
          pagingEnabled={true}
          numColumns = {3}
          data={['People', 'CID', 'CID', 'CID','People', 'CID', 'CID']}
          renderItem={BottomRenderItem}
          keyExtractor={(item) => item.id}
        />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
  },
  topItem: {
    width: Dimensions.get('window').width ,
    justifyContent:'center',
    padding: 8,
    borderRadius: 10
  },
  bottomItem: {
    width: Dimensions.get('window').width / 3 ,
    height: 180,
    justifyContent:'center',
    padding: 8,
    borderRadius: 10
  },
  title: {
    fontSize: 32,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
