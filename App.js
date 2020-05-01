import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import AR from './screens/AR';
import Countries from './screens/Countries';
import Country from './screens/Country';
import Login from './screens/LogIn';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    AR: AR,
    Countries: Countries,
    Country: Country
  },
  {
    initialRouteName: 'Home'
  }
);

const AuthStack = createStackNavigator({
  Login: Login,
  SignIn: SignIn,
  SignUp: SignUp
});

const SwitchNav = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
});

export default class App extends Component {
  state = {};

  render() {
    return <SwitchNav />;
  }
}
