import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from './screens/Home';
import AR from './screens/AR';
import Countries from './screens/Countries';
import Country from './screens/Country';
import Login from './screens/LogIn';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ArtCard from './screens/ArtCard';
import ProfileScreen from './screens/Profile';

const AppStack = createStackNavigator({
  Countries: Countries,
  Country: Country,
  ArtCard: ArtCard
});

const AuthStack = createStackNavigator({
  Login: Login,
  SignIn: SignIn,
  SignUp: SignUp
});

const AppTab = createBottomTabNavigator(
  {
    Profile: ProfileScreen,
    Home: AppStack,
    AR: AR
  },
  {
    initialRouteName: 'Home'
  }
);

const SwitchNav = createSwitchNavigator({
  Auth: AuthStack,
  App: AppTab
});

export default class App extends Component {
  state = {};

  render() {
    return <SwitchNav />;
  }
}
