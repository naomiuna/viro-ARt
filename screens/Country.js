import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as api from '../utils/api';

class Country extends Component {
  state = {
    artCollection: [],
    location: this.props.navigation.getParam('country', 'default-value'),
  };

  componentDidMount() {
    this.fetchArtUrl();
  }

  fetchArtUrl = () => {
    api.getArtIDs(this.state.location).then((objectIDs) => {
      for (let i = 0; i < 12; i++) {
        api.getArt(objectIDs.objectIDs[i]).then((art) => {
          this.setState({ artCollection: [...this.state.artCollection, art] });
        });
      }
    });
  };

  render() {
    return (
      <View style={this.styles.container}>
        {this.state.artCollection.map((art) => {
          return (
            <TouchableOpacity
              key={art.objectID}
              onPress={() => {
                this.props.navigation.navigate('ArtCard', {
                  artObject: art,
                });
              }}
            >
              <Image
                style={{ width: 130, height: 200 }}
                source={{ uri: art.primaryImage }}
                key={art.objectID}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  styles = StyleSheet.create({
    container: { flex: 1, flexWrap: 'wrap' },
  });
}

export default Country;
