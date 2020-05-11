import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as api from '../utils/apiAWS.js';

class ArtCard extends Component {
  state = { username: 'jessjelly', artObject: {} };

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
          style={{
            width: 150,
            height: 200,
            alignSelf: 'center',
            marginTop: 20,
          }}
          source={{ uri: artObject.primaryImage }}
        />
        <Text style={styles.title}>{artObject.title}</Text>

        <View style={styles.info}>
          <Text style={styles.info_key}>ARTIST: </Text>
          <Text
            style={{
              paddingBottom: 12,
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            {artObject.artistDisplayName ? artObject.artistDisplayName : 'N/A'}
          </Text>
          <Text style={styles.info_key}>DATE: </Text>
          <Text style={{ paddingBottom: 16, fontSize: 16, fontWeight: '500' }}>
            {artObject.objectDate ? artObject.objectDate : 'N/A'}
          </Text>
          <Text style={styles.info_key}>ARTIST BIO: </Text>
          <Text style={{ paddingBottom: 16, fontSize: 16, fontWeight: '500' }}>
            {artObject.artistDisplayBio ? artObject.artistDisplayBio : 'N/A'}
          </Text>
          <Text style={styles.info_key}>ART LOCATION: </Text>
          <Text style={{ paddingBottom: 16, fontSize: 16, fontWeight: '500' }}>
            {artObject.repository}
          </Text>
          <Text style={styles.info_key}>TO FIND OUT MORE: </Text>
          <Text style={{ paddingBottom: 16, fontSize: 16, fontWeight: '500' }}>
            {artObject.objectWikidata_URL
              ? artObject.objectWikidata_URL
              : 'N/A'}
          </Text>
        </View>
        <TouchableOpacity onPress={this.addArt} style={styles.save_btn}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>
            SAVE TO GALLERY
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  addArt = () => {
    const { username, artObject } = this.state;
    const body = {
      username,
      primaryImage: artObject.primaryImage,
    };
    console.log(body);
    return api
      .postUserArt(body)
      .then(() => console.log('artAdded'))
      .catch((err) => console.log(err));
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
    paddingTop: 15,
    fontStyle: 'italic',
  },
  info: {
    alignSelf: 'center',
    margin: 10,
    padding: 15,
    fontSize: 40,
    backgroundColor: '#53ab8b',
    alignSelf: 'center',
    borderRadius: 25,
  },
  info_key: {
    fontWeight: '700',
    paddingBottom: 3,
    fontStyle: 'italic',
  },
  save_btn: {
    backgroundColor: '#53ab8b',
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default ArtCard;
