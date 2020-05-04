import React from 'react';
import { FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const keyExtractor = (item, index) => item.objectID;

const ArtList = (props) => {
  return (
    <FlatList
      data={props.art}
      numColumns={3}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.objectID}
          style={{ padding: 5 }}
          onPress={() => {
            props.navigation.navigate('ArtCard', {
              artObject: item,
            });
          }}
        >
          <Image
            style={styles.image}
            source={{ uri: item.primaryImage }}
            key={item.objectID}
          />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: { width: 130, height: 200, padding: 5 },
});

export default ArtList;
