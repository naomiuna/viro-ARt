import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import ArtList from "../components/ArtList";
import * as api from "../utils/apiAWS";

export default class ProfileScreen extends Component {
  state = {
    username: "jessjelly",
    artData: [],
    isLoading: true,
    activeIndex: 0,
    refreshing: false,
  };

  componentDidMount() {
    this.fetchArt();
  }

  //componentDidMount  - get username of authenticated user & get  their favourite art
  //artData - need to save all relevant art info for click to work
  render() {
    if (this.state.isLoading)
      return (
        <View style={styles.loading}>
          <Image source={require("../images/Earth-5.9s-204px.gif")} />
        </View>
      );
    const { username, artData, activeIndex } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={require("../images/profile.png")}
                style={styles.image}
                resizeMode="center"
              ></Image>
            </View>
            <View style={(styles.infoContainer, { borderColor: "#DFD8C8" })}>
              <Text style={[styles.text, { fontSize: 25, fontWeight: "100" }]}>
                {username}'s Gallery
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5",
              }}
            >
              <Button
                transparent
                color="green"
                title="Gallery"
                onPress={() => this.galleryClicked(0)}
              ></Button>

              <Button
                transparent
                color="green"
                title="Screenshot"
                onPress={() => this.galleryClicked(1)}
              ></Button>
            </View>
            {activeIndex === 0 ? (
              <ArtList
                art={artData}
                navigation={this.props.navigation}
                type="profile"
                fetchArt={this.fetchArt}
              />
            ) : (
              activeIndex === 1 && (
                <View>
                  <Text>Screenshot section goes </Text>
                </View>
              )
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  galleryClicked = (index) => {
    this.setState({ activeIndex: index });
  };

  fetchArt = () => {
    this.setState({ artData: [], isLoading: true });
    api.getUserArt(this.state.username).then((userData) => {
      const artArray = userData.Item.userArtArray;
      const artData = artArray.map((art) => {
        return { objectID: Date.now(), primaryImage: art };
      });
      this.setState({ artData, isLoading: false, refreshing: false });
    });
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchArt();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
    alignSelf: "center",
  },
  image: {
    flex: 1,
    aspectRatio: 1.0,
    resizeMode: "contain",
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
});

{
  /* <View style={styles.container}>
        <Text style={styles.header}>{username}'s Gallery</Text>
        <ArtList
          art={artData}
          navigation={this.props.navigation}
          type="profile"
          fetchArt={this.fetchArt}
        />
      </View> */
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loading: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   header: {
//     padding: 16,
//     fontSize: 20,
//     color: "white",
//     backgroundColor: "#53ab8b",
//     textAlign: "center",
//   },
// });
