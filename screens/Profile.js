import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import ArtList from '../components/ArtList';
import * as api from '../utils/apiAWS';

export default class ProfileScreen extends Component {
  state = {
    username: 'jessjelly',
    artData: [],
    isLoading: true
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
          <Image source={require('../images/Earth-5.9s-204px.gif')} />
        </View>
      );
    const { username, artData } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 20,
            color: 'white',
            backgroundColor: '#53ab8b'
          }}
        >
          {username}'s Gallery
        </Text>
        <ArtList
          art={artData}
          navigation={this.props.navigation}
          type="profile"
          fetchArt={this.fetchArt}
        />
      </View>
    );
  }
  fetchArt = () => {
    this.setState({ artData: [], isLoading: true });
    api.getUserArt(this.state.username).then((userData) => {
      const artArray = userData.Item.userArtArray;
      const artData = artArray.map((art) => {
        return { objectID: Date.now(), primaryImage: art };
      });
      this.setState({ artData, isLoading: false });
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
