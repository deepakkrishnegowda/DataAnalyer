/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import HomeView from './Source/HomeView';
import DashboardView from './Source/Dashboard/DashboardView';
import SearchView from './Source/Search/SearchView';
const Tab = createBottomTabNavigator();
const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Dashboard') {
            iconName = 'th-large';
          } 
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#005A8B',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Dashboard" component={DashboardView} />
      <Tab.Screen name="Search" component={SearchView} />
      <Tab.Screen name="Profile" component={DashboardView} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default App;
