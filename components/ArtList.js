import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

class ArtList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.art}
        numColumns={3}
        keyExtractor={this.keyExtractor}
        maxToRenderPerBatch={15}
        renderItem={this.renderItem}
      />
    );
  }
  keyExtractor = (item) => item.objectID.toString();

  renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'column', margin: 2 }}>
      <TouchableOpacity
        key={item.objectID}
        style={{ flex: 1 }}
        onPress={() => {
          if (this.props.type === 'country') {
            this.props.navigation.navigate('ArtCard', {
              artObject: item
            });
          }
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: item.primaryImage }}
          key={item.objectID}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120
  }
});

export default ArtList;
