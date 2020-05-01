import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class LogIn extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignIn')}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
