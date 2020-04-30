'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARPlaneSelector,
  ViroImage
} from 'react-viro';

export default class ARScene extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
      loading: true,
      chosenArt: 'https://images.metmuseum.org/CRDImages/ep/original/DT5475.jpg'
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    const { text, loading, chosenArt } = this.state;
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {loading && (
          <ViroText
            text={text}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0, -1]}
            style={styles.helloWorldTextStyle}
          />
        )}
        {/* <ViroARPlaneSelector> */}
        <ViroImage
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          source={{ uri: chosenArt }}
        />
        {/* </ViroARPlaneSelector> */}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        loading: false
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = ARScene;
