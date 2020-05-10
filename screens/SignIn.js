import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  StyleSheet
} from 'react-native';

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
      //aws authorisation - then if successful...
      //e.g. api.userSignIn(email, password).then
      //(catch - alert with error message)
      this.setState({ signedIn: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="username"
            placeholderTextColor="gray"
            onChangeText={(username) => this.setState({ username })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={this.handleClick}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        >
          <Text>Create a new account</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputView: {
    width: '80%',
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: 'gray'
  },
  loginText: {
    color: 'white'
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#53ab8b',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  }
});
