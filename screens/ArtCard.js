import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';
import * as api from '../utils/apiAWS.js';

class ArtCard extends Component {
  state = { username: 'something97', artObject: {} };

  componentDidMount() {
    this.setState({
      artObject: this.props.navigation.getParam('artObject', 'default-value'),
    });
  }

  render() {
    const { artObject } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 130, height: 200 }}
          source={{ uri: artObject.primaryImage }}
        />
        <View>
          <Text>Title: {artObject.title}</Text>
          <Text>Artist: {artObject.artistDisplayName}</Text>
          <Text>Date: {artObject.objectDate}</Text>
          <Text>Art location: {artObject.repository}</Text>
        </View>
        <Button title="Save Art to Gallery" onPress={this.addArt} />
      </View>
    );
  }

  addArt = () => {
    const { username, artObject } = this.state;
    const body = {
      username,
      image_url: artObject.primaryImage,
      id: artObject.objectID.toString(),
    };
    return api
      .postUserArt(body)
      .then(() => console.log('artAdded'))
      .catch((err) => console.log(err));
  };
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ArtCard;
