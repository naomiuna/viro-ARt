import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import * as api from '../utils/api';

class Country extends Component {
  state = { artImages: [], objectIDs: [], location: 'France' };

  componentDidMount() {
    this.fetchArtUrl();
  }

  fetchArtUrl = () => {
    api.getArtIDs(this.state.location).then((objectIDs) => {
      this.setState({ objectIDs: objectIDs.objectIDs });
      for (let i = 0; i < 5; i++) {
        api.getArt(this.state.objectIDs[i]).then((art) => {
          const url = art.primaryImage;
          this.setState({ artImages: [...this.state.artImages, url] });
        });
      }
    });
  };

  render() {
    const { navigation } = this.props;
    const country = navigation.getParam('country', 'default-value');
    console.log(this.state.artImages);
    return (
      <View style={this.styles.container}>
        {this.state.artImages.map((image) => {
          return (
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: image }}
              key={image}
            />
          );
        })}
      </View>
    );
  }
  styles = StyleSheet.create({
    container: { flex: 1 },
  });
}

export default Country;
