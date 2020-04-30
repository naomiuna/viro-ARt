import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

const image = {
  uri:
    'https://cutewallpaper.org/21/world-map-iphone-wallpaper/The-World-iPhone-Wallpaper-iDesign-iPhone.jpg'
};

export default class Countries extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Countries here!</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
