import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './screens/screen1';
import SettingScreen from './screens/screen2';
import SearchScreen from './screens/screen3';


export default createMaterialBottomTabNavigator({
  Home: { screen: HomeScreen,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-home" color={tintColor} size={24} />
      ),
    }
  
  },
  Settings: { screen: SettingScreen,
    navigationOptions:{
      tabBarLabel: 'Settings',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-settings" color={tintColor} size={24} />
      ),
    }
  },
  Search: { screen: SearchScreen,
    navigationOptions:{
      tabBarLabel: 'Search',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },

},{
  initialRouteName: 'Home',
  //order: ['Settings', 'Home'],
  activeTintColor: 'orange',
  //shifting: true,
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
