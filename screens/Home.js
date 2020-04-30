import React from 'react';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Home Screen</Text>
        <Button
          title="Go to AR"
          onPress={() => this.props.navigation.navigate('AR')}
        />
        <Button
          title="Go to Countries"
          onPress={() => this.props.navigation.navigate('Countries')}
        />
      </View>
    );
  }
}
