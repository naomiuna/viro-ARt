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
//import {Auth} from 'aws-amplify'
//??

export default class SignIn extends Component {
  state = {
    password: '',
    username: '',
    signedIn: false
  };

  componentDidUpdate = () => {
    const { signedIn } = this.state;
    if (signedIn) {
      this.props.navigation.navigate('App');
    }
  };

  handleClick = () => {
    const { password, username } = this.state;
    if (!username || !password)
      Alert.alert('Alert', 'Please enter username and password!');
    else {
      //aws authorisation - then if successful (catch - alert with error message)
      this.setState({ signedIn: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Type your username here"
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          paceholder="Type your password here"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity onPress={() => this.handleClick('login')}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Sign Up');
          }}
        >
          <Text>Create a new account</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
