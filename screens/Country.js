import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import * as api from '../utils/api';

class Country extends Component {
  state = {
    artCollection: [],
    location: this.props.navigation.getParam('country', 'default-value'),
    isLoading: true,
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

  keyExtractor = (item, index) => item.objectID;

  render() {
    if (this.state.isLoading) return <Text>Loading...</Text>;
    return (
      <View style={this.styles.container}>
        <FlatList
          data={this.state.artCollection}
          numColumns={3}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.objectID}
              onPress={() => {
                this.props.navigation.navigate('ArtCard', {
                  artObject: item,
                });
              }}
            >
              <Image
                style={{ width: 100, height: 200 }}
                source={{ uri: item.primaryImage }}
                key={item.objectID}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      alignItems: 'center',
    },
  });
}

export default Country;
