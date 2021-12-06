import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fb from "./Screens/fb"
import In from "./Screens/in"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
 render()
 {
  return (
    <AppContainer/>
  );
}
}
const tabNavigator=createBottomTabNavigator({
Facebook:{screens:fb},
Instagram:{screens:In}

})
const AppContainer=createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
