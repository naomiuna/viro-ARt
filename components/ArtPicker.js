import React, { Component } from 'react';
import * as api from '../utils/apiAWS';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

export default class ArtPicker extends Component {
  state = {
    artData: [],
    isLoading: true,
    username: 'jessjelly',
    refreshing: false
  };

  componentDidMount() {
    this.fetchArt();
  }

  render() {
    const { artData, isLoading } = this.state;
    const { updateChosenArt } = this.props;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Image source={require('../images/Earth-5.9s-204px.gif')} />
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
            keyExtractor={this.keyExtractor}
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.fetchArt();
            }}
          ></FlatList>
        )}
      </View>
    );
  }

  keyExtractor = (item) => {
    return item.objectID + (Math.random() * 100).toString();
  };

  fetchArt = () => {
    this.setState({ artData: [], isLoading: true });
    api.getUserArt(this.state.username).then((userData) => {
      const artArray = userData.Item.userArtArray;
      const artData = artArray.map((art) => {
        return { objectID: Date.now(), primaryImage: art };
      });
      this.setState({ artData, isLoading: false });
    });
  };
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
    backgroundColor: '#eafff980',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    height: '100%'
  },
  artItem: {
    height: 175,
    alignItems: 'center',
    margin: 3,
    borderRadius: 2
  }
});
