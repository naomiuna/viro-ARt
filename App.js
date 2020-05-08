import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
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

const AppStack = createStackNavigator(
  {
    Countries: Countries,
    Country: Country,
    ArtCard: ArtCard
  },
  {
    navigationOptions: {
      headerTitle: 'world of ARt',
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerBackTitle: null,
      headerTintColor: '#157759',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#157759'
      },
      headerLayoutPreset: 'center'
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: Login,
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    navigationOptions: {
      headerTitle: 'world of ARt',
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerBackTitle: null,
      headerTintColor: '#157759',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#157759'
      },
      headerLayoutPreset: 'center'
    }
  }
);

const AppTab = createMaterialTopTabNavigator(
  {
    Profile: ProfileScreen,
    Home: AppStack,
    AR: AR
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        color: '#157759'
      },
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        color: '#53ab8b'
      }
    }
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
