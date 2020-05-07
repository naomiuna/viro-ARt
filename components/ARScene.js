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
    scale: [0.5, 0.5, 0.5],
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
        {chosenArt &&
          chosenArt.map((artPiece) => {
            let rightArt = "";
            if (typeof artPiece === "string") rightArt = artPiece;
            return (
              <ViroNode
                onPinch={this._onPinch}
                position={[0, 0, 0]}
                dragType="FixedToWorld"
                onDrag={() => {}}
              >
                <ViroImage
                  scale={this.state.scale}
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
  _onPinch = (pinchState, scaleFactor, source) => {
    console.log(scaleFactor);
    let newScale = [
      this.state.scale[0] * scaleFactor,
      this.state.scale[1] * scaleFactor,
      this.state.scale[2] * (scaleFactor / 2),
    ];

    if (pinchState == 3) {
      this.setState({
        scale: newScale,
      });

      return;
    }
  };
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
