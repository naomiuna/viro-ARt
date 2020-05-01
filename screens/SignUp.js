import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';

export default class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  handleClick = () => {
    const { email, confirmPassword, password, username } = this.state;
    if (!email || !username || !password)
      Alert.alert(
        'Missing Fields',
        'Please enter email, username and password!'
      );
    else if (password !== confirmPassword) {
      Alert.alert("Passwords don't match", 'Please re-enter password!');
    } else {
      //aws authorisation - SignUp - then if successful...
      //(catch - alert with error message)
      this.props.navigation.navigate('App');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder="Type your email here"
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder="Type your username here"
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          paceholder="Type your password here"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          paceholder="Confirm password"
          secureTextEntry
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
        />
        <TouchableOpacity onPress={this.handleClick}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('LogIn');
          }}
        >
          <Text>Already have an account? Log in here</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
