import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
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
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching your favourite art</Text>
        ) : (
          <FlatList
            data={artData}
            renderItem={({ item }) => <ArtItem img={item.img} />}
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

function ArtItem({ img }) {
  return (
    <View>
      <TouchableOpacity style={{ width: 130, height: 200 }}>
        <Image source={{ uri: img }} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: 200,
    alignItems: 'center',
    position: 'absolute',
    right: -100,
    height: '100%'
  }
});
