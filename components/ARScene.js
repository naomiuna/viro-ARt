'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { ViroARScene, ViroConstants, ViroImage, ViroNode } from 'react-viro';

export default class ARScene extends Component {
  state = {};

  render() {
    const {
      sceneNavigator: {
        viroAppProps: [{ chosenArt }, showEditMenu]
      }
    } = this.props;
    return (
      <ViroARScene>
        {chosenArt &&
          chosenArt.map((artPiece) => {
            const { image_url, scale } = artPiece;
            let rightArt = '';
            if (typeof image_url === 'string') rightArt = image_url;
            return (
              <ViroNode
                position={[0, 0, -2]}
                onDrag={() => {}}
                dragType="FixedToPlane"
                dragPlane={{
                  planePoint: [0, 0, -2],
                  planeNormal: [0, 0, 1], // works if user standing perpendicular to wall.
                  maxDistance: 5
                }}
              >
                <ViroImage
                  onClick={() => {
                    showEditMenu(rightArt);
                  }}
                  scale={scale}
                  position={[0, 0, 0]}
                  source={{ uri: rightArt }}
                />
              </ViroNode>
            );
          })}
      </ViroARScene>
    );
  }
}

module.exports = ARScene;
