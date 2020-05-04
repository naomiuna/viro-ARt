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
        img: 'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
        id: '436535'
      },
      {
        img: 'https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg',
        id: '436528'
      },
      {
        img:
          'https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg',
        id: '436532'
      }
    ],
    isLoading: false
  };

  //component did mount - fetch users saved art - set loading to false

  render() {
    //method to  add to ARScene on  props
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
              <ArtItem updateChosenArt={updateChosenArt} img={item.img} />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        )}
      </View>
    );
  }

  onClick = () => {
    Alert.alert('image clicked!');
  };
}

function ArtItem({ img, updateChosenArt }) {
  return (
    <View style={styles.artItem}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row' }}
        onPress={() => updateChosenArt(img)}
      >
        <Image source={{ uri: img }} style={{ width: 130, height: 200 }} />
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
