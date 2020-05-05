import React, { Component } from 'react';
import * as api from '../utils/apiAWS';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class ArtPicker extends Component {
  state = {
    artData: [],
    isLoading: true,
    username: 'something97',
  };

  componentDidMount() {
    api.getUserArt().then((artData) => {
      const formattedArtData = artData.map((art) => {
        return { primaryImage: art.image_url, objectID: art.id };
      });
      this.setState({ artData: formattedArtData, isLoading: false });
    });
  }

  render() {
    const { artData, isLoading } = this.state;
    const { updateChosenArt } = this.props;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching your favourite art</Text>
        ) : (
          <FlatList
            numColumns={1}
            data={artData}
            renderItem={({ item }) => (
              <ArtItem
                updateChosenArt={updateChosenArt}
                primaryImage={item.primaryImage}
              />
            )}
            keyExtractor={(item) => item.objectID}
          ></FlatList>
        )}
      </View>
    );
  }
}

function ArtItem({ primaryImage, updateChosenArt }) {
  return (
    <View style={styles.artItem}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row' }}
        onPress={() => updateChosenArt(primaryImage)}
      >
        <Image
          source={{ uri: primaryImage }}
          style={{ width: 130, height: 200 }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(150,150,150,0.5)',
    width: 300,
    alignItems: 'center',
    position: 'absolute',
    right: -100,
    height: '100%',
  },
  artItem: {
    height: 175,
    alignItems: 'center',
    margin: 3,
    borderRadius: 2,
  },
});
