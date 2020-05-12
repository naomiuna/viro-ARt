import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  ScrollView
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
      this.props.navigation.navigate('Countries', { firstTime: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
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
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="confirm password"
            placeholderTextColor="gray"
            secureTextEntry
            onChangeText={(confirmPassword) =>
              this.setState({ confirmPassword })
            }
          />
        </View>

        <TouchableOpacity style={styles.signinBtn} onPress={this.handleClick}>
          <Text style={styles.signinText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        >
          <Text>Already have an account? Log in here</Text>
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
  signinText: {
    color: 'white'
  },
  signinBtn: {
    width: '80%',
    backgroundColor: '#53ab8b',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10
  }
});
