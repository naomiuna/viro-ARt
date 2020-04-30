import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import AR from './screens/AR';
import Countries from './screens/Countries';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AR: AR,
    Countries: Countries
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
