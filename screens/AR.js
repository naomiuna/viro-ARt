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
import ARScene from '../components/ARScene';
import ArtPicker from '../components/ArtPicker';

export default class ViroSample extends Component {
  state = {
    showMenu: false,
    chosenArt: 'https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg'
  };
  render() {
    const { showMenu, chosenArt } = this.state;
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          initialScene={{ scene: ARScene }}
          viroAppProps={{ chosenArt }}
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
      </View>
    );
  }
  toggleMenu = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu
    }));
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

module.exports = ViroSample;
