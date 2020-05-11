import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default class LogIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={require('../images/world-map.png')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignIn')}
          style={styles.btn}
        >
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUp')}
          style={styles.btn}
        >
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  btn: {
    width: '80%',
    backgroundColor: '#53ab8b',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  btnText: {
    color: 'white'
  }
});
