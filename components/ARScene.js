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
        viroAppProps: [{ chosenArt }, showEditMenu],
      },
    } = this.props;
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        anchorDetectionTypes="PlanesVertical"
      >
        {chosenArt &&
          chosenArt.map((artPiece) => {
            const { image_url, scale } = artPiece;
            let rightArt = "";
            if (typeof image_url === "string") rightArt = image_url;
            return (
              <ViroNode
                position={[0, 0, 0]}
                dragType="FixedToWorld"
                onDrag={() => {}}
              >
                <ViroImage
                  onClick={() => {
                    showEditMenu(rightArt);
                  }}
                  scale={scale}
                  position={[0, 0, -2]}
                  source={{ uri: rightArt }}
                />
              </ViroNode>
            );
          })}
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

  onClick = () => {};

  onSelect = () => {
    return (
      <ViroImage
        scale={[0.5, 0.5, 0.5]}
        position={[0, -0.1, -1]}
        source={{ uri: chosenArt }}
      />
    );
  };
}

const styles = StyleSheet.create({
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
