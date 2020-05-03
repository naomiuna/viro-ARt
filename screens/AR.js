import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';

const ARScene = require('../js/ARScene');

export default class ViroSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator initialScene={{ scene: ARScene }} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png'
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
  clickHandler = () => {
    Alert.alert('Floating Button Clicked');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
    //backgroundColor:'black'
  }
});

module.exports = ViroSample;
