import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';

const ARScene = require('../js/ARScene');

export default class ViroSample extends Component {
  render() {
    return <ViroARSceneNavigator initialScene={{ scene: ARScene }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = ViroSample;
