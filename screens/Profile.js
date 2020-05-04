import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import ArtList from '../components/ArtList';

export default class ProfileScreen extends Component {
  state = {
    username: 'naomi',
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
    ]
  };

  //componentDidMount  - get username of authenticated user & get  their favourite art
  //artData - need to save all relevant art info for click to work
  render() {
    const { username, artData } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 20,
            color: 'white',
            backgroundColor: '#fb5b5a'
          }}
        >
          {username}'s Gallery
        </Text>
        <ArtList
          art={artData}
          navigation={this.props.navigation}
          type="profile"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
