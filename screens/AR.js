import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

import { ViroARSceneNavigator, ViroButton } from 'react-viro';
import ARScene from '../components/ARScene';
import ArtPicker from '../components/ArtPicker';

export default class ViroSample extends Component {
  state = {
    showMenu: false,
    chosenArt:
      'https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg',
    screenshot: true
  };
  render() {
    const { showMenu, chosenArt } = this.state;
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          initialScene={{ scene: ARScene }}
          viroAppProps={{ chosenArt }}
          ref={(ARSceneNav) => (this.ARSceneNav = ARSceneNav)}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.toggleMenu}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png'
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        {showMenu && <ArtPicker updateChosenArt={this.updateChosenArt} />}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.screenShot}
          style={styles2.TouchableOpacityStyle}
        >
          <Image
            source={require('../images/camera.jpg')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
  toggleMenu = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu
    }));
  };

  screenShot = async () => {
    const response = await this.ARSceneNav.sceneNavigator.takeScreenshot(
      'photo',
      true
    );
    Alert.alert('Saved to camera roll!');
  };

  updateChosenArt = (chosenArt) => {
    this.setState({ chosenArt });
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
    left: 30,
    top: 30
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  }
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
    top: 100
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  }
});

module.exports = ViroSample;
