import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl
} from 'react-native';
import ArtList from '../components/ArtList';
import * as api from '../utils/apiAWS';
import * as apiS3 from '../utils/s3Requests';
import ScreenShotList from '../components/ScreenShotlist';

export default class ProfileScreen extends Component {
  state = {
    username: 'jessjelly',
    artData: [],
    screenShotData: [],
    isLoading: true,
    activeIndex: 0,
    refreshing: false
  };

  componentDidMount() {
    this.fetchArt();
    this.fetchScreenShot();
  }

  render() {
    if (this.state.isLoading)
      return (
        <View style={styles.loading}>
          <Image source={require('../images/Earth-5.9s-204px.gif')} />
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
          <View style={{ alignSelf: 'center' }}>
            <View style={styles.profileImage}>
              <Image
                source={require('../images/profile.png')}
                style={styles.image}
                resizeMode="center"
              ></Image>
            </View>
            <View style={(styles.infoContainer, { borderColor: '#DFD8C8' })}>
              <Text style={[styles.text, { fontSize: 25, fontWeight: '100' }]}>
                {username}'s Gallery
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderTopColor: '#eae5e5'
              }}
            >
              <Button
                transparent
                color="#157759"
                title="Gallery"
                onPress={() => this.galleryClicked(0)}
              ></Button>

              <Button
                transparent
                color="#157759"
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
                <ScreenShotList ScreenShot={this.state.screenShotData} />
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

  fetchScreenShot = () => {
    for (let i = 1; i <= 6; i++) {
      let count = 1;
      apiS3.getScreenShots(i).then((url) => {
        const screenShotObj = { count, url };
        this.setState({
          screenShotData: [...this.state.screenShotData, screenShotObj]
        });
      });
      count++;
    }
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
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    aspectRatio: 1.0,
    resizeMode: 'contain'
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 25,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16
  }
});
