import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";
import ARScene from "../components/ARScene";
import ArtPicker from "../components/ArtPicker";
import EditArtMenu from "../components/EditArtMenu";

export default class ViroSample extends Component {
  state = {
    showMenu: false,
    chosenArt: [],
    editMenu: false,
    currentArtPiece: "",
  };
  render() {
    const { showMenu, chosenArt, editMenu, currentArtPiece } = this.state;
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          initialScene={{ scene: ARScene }}
          viroAppProps={[{ chosenArt }, this.showEditMenu]}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.toggleMenu}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png",
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        {showMenu && <ArtPicker updateChosenArt={this.updateChosenArt} />}
        {editMenu && <EditArtMenu deleteMethod={this.deleteArt} />}
      </View>
    );
  }
  toggleMenu = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
      editMenu: false,
    }));
  };

  updateChosenArt = (newArt) => {
    const joined = this.state.chosenArt.concat(newArt);
    this.setState({ chosenArt: joined });
  };
  showEditMenu = (artPiece) => {
    console.log(artPiece);

    this.setState((prevState) => {
      return { showMenu: false, editMenu: true, currentArtPiece: artPiece };
    });
  };

  closeEditMenu = () => {
    this.setState({ editMenu: false });
  };

  deleteArt = () => {
    const { chosenArt, currentArtPiece } = this.state;
    const newArt = chosenArt.filter((art) => {
      if (art !== currentArtPiece) return art;
    });

    this.setState({ chosenArt: newArt });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    left: 30,
    top: 30,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

module.exports = ViroSample;
