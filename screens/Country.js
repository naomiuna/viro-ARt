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
    api.getArtIDs(this.state.location).then((objectIDs) => {
      objectIDs.objectIDs.forEach((id) => {
        api.getArt(id).then((art) => {
          this.setState({ artCollection: [...this.state.artCollection, art] });
        });
      });
      this.setState({ isLoading: false });
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
      flex: 1,
      paddingTop: 22
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
}

export default Country;
