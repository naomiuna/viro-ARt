import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as api from '../utils/api';
import ArtList from '../components/ArtList';

class Country extends Component {
  state = {
    artCollection: [],
    location: this.props.navigation.getParam('country', 'default-value'),
    isLoading: true
  };

  componentDidMount() {
    this.fetchArtUrl();
  }

  fetchArtUrl = () => {
    api.getArtIDs(this.state.location).then(({ objectIDs }) => {
      let artIDs = objectIDs;
      if (objectIDs.length > 60) {
        artIDs = objectIDs.slice(0, 60);
      }
      const artData = artIDs.map((id) => {
        return api.getArt(id);
      });
      Promise.all(artData).then((data) => {
        this.setState({ artCollection: data, isLoading: false });
      });
    });
  };

  render() {
    if (this.state.isLoading)
      return (
        <View style={this.styles.loading}>
          <Image source={require('../images/Earth-5.9s-204px.gif')} />
        </View>
      );
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.header}>{this.state.location}</Text>
        <ArtList
          art={this.state.artCollection}
          navigation={this.props.navigation}
          type="country"
        />
      </View>
    );
  }
  styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      padding: 16,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#53ab8b',
      textAlign: 'center'
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
}

export default Country;
