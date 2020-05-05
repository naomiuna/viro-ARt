import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import ArtList from '../components/ArtList';
import * as api from '../utils/apiAWS';

export default class ProfileScreen extends Component {
  state = {
    username: 'something97',
    artData: [],
  };

  componentDidMount() {
    api.getUserArt().then((artData) => {
      const formattedArtData = artData.map((art) => {
        return { primaryImage: art.image_url, objectID: art.id };
      });
      this.setState({ artData: formattedArtData });
    });
  }

  //componentDidMount  - get username of authenticated user & get  their favourite art
  //artData - need to save all relevant art info for click to work
  render() {
    const { username, artData } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 20,
            color: 'white',
            backgroundColor: '#fb5b5a',
          }}
        >
          {username}'s Gallery
        </Text>
        <ArtList
          art={artData}
          navigation={this.props.navigation}
          type="profile"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});
