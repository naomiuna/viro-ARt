"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARPlaneSelector,
  ViroImage,
  ViroBox,
  ViroNode,
} from "react-viro";

export default class ARScene extends Component {
  state = {
    text: "Initializing AR...",
    loading: true,
    // chosenArt: 'https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg'
  };

  render() {
    const { text, loading } = this.state;
    const {
      sceneNavigator: {
        viroAppProps: { chosenArt },
      },
    } = this.props;
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        anchorDetectionTypes="PlanesVertical"
      >
        <ViroARPlaneSelector alignment="Vertical">
          <ViroNode
            position={[0, 0, 0]}
            dragType="FixedToWorld"
            onDrag={() => {}}
          >
            <ViroImage
              scale={[0.5, 0.5, 0.5]}
              position={[1, 0, -1]}
              rotation={[-90, -90, 0]}
              source={{ uri: chosenArt }}
            />
          </ViroNode>
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        loading: false,
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  };
  onSelect = () => {
    return (
      <ViroImage
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        source={{ uri: chosenArt }}
      />
    );
  };
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

module.exports = ARScene;

// {loading ? (
//   <ViroText
//     text={text}
//     scale={[0.5, 0.5, 0.5]}
//     position={[0, 0, -1]}
//     style={styles.helloWorldTextStyle}
//   />
// ) : (
//   <ViroARPlaneSelector />
//   <ViroImage
//     scale={[0.5, 0.5, 0.5]}
//     position={[0, 0, -1]}
//     source={{ uri: chosenArt }}
//   />
// )}
