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
    username: 'jessjelly',
  };

  componentDidMount() {
    api.getUserArt(this.state.username).then((userData) => {
      const artArray = userData.Item.userArtArray;
      const artData = artArray.map((art) => {
        return { objectID: Date.now(), primaryImage: art };
      });
      this.setState({ artData, isLoading: false });
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
