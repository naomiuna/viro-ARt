import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import options from "../config";
import { RNS3 } from "react-native-s3-upload";
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
                "https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png",
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        {showMenu && <ArtPicker updateChosenArt={this.updateChosenArt} />}
        {editMenu && (
          <EditArtMenu
            deleteMethod={this.deleteArt}
            closeEditMenu={this.closeEditMenu}
            editScale={this.editScale}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.screenShot}
          style={styles2.TouchableOpacityStyle}
        >
          <Image
            source={require("../images/camera.jpg")}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
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
    const { chosenArt } = this.state;
    const found = chosenArt.find((element) => element.image_url === newArt);

    if (!found) {
      let artObj = { image_url: newArt, scale: [0.5, 0.5, 0.5] };
      const joined = this.state.chosenArt.concat(artObj);
      this.setState({ chosenArt: joined });
    }
  };
  showEditMenu = (artPiece) => {
    if (this.state.editMenu === false) {
      this.setState((prevState) => {
        return { showMenu: false, editMenu: true, currentArtPiece: artPiece };
      });
    }
  };

  editScale = (size) => {
    const { chosenArt, currentArtPiece } = this.state;
    let [...artCopy] = chosenArt;

    const resizingScale = artCopy.map((art) => {
      if (art.image_url === currentArtPiece) {
        if (size === "Large") {
          art.scale = [0.75, 0.75, 0];
        }
        if (size === "Medium") {
          art.scale = [0.5, 0.5, 0];
        }
        if (size === "Small") {
          art.scale = [0.25, 0.25, 0];
        }
        return art;
      } else {
        return art;
      }
    });

    this.setState({ chosenArt: resizingScale }, () => {
      console.log(this.state.chosenArt);
    });
  };

  closeEditMenu = () => {
    this.setState({ editMenu: false });
  };

  deleteArt = () => {
    const { chosenArt, currentArtPiece } = this.state;
    const newArt = chosenArt.filter((art) => {
      if (art.image_url !== currentArtPiece) return art;
    });
    this.setState({ chosenArt: newArt, editMenu: false });
  };
  screenShot = () => {
    this.ARSceneNav.sceneNavigator
      .takeScreenshot("photo", true)
      .then((response) => {
        this.uploadToS3(response.url);
      });
    Alert.alert("Saved to your camera roll!");
  };
  uploadToS3(url) {
    const file = {
      uri: url,
      name: "6.png",
      type: "image/png",
    };

    RNS3.put(file, options).then((response) => {
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
      console.log(response.body);
    });
  }
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

const styles2 = StyleSheet.create({
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
    top: 100,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

module.exports = ViroSample;
