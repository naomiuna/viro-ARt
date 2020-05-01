import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Tutorial extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>First login tutorial</Text>
      </View>
    );
  }
}
