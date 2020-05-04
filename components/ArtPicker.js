import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
  Text
} from 'react-native';

export default class ArtPicker extends Component {
  state = {
    artData: [
      {
        primaryImage:
          'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
        objectID: '436535'
      },
      {
        primaryImage:
          'https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg',
        objectID: '436528'
      },
      {
        primaryImage:
          'https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg',
        objectID: '436532'
      }
    ],
    isLoading: false
  };

  //component did mount - fetch users saved art - set loading to false

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
    height: '100%'
  },
  artItem: {
    height: 175,
    alignItems: 'center',
    margin: 3,
    borderRadius: 2
  }
});
