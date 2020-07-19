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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardView from './Source/DashboardView';
import DashboardDetails from './Source/DashboardDetails/DashboardDetails';
const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardView} />
      <Stack.Screen name="DashboardDetails" component={DashboardDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;