import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} from 'react-native';

const keyExtractor = (item, index) => item.objectID;

const ArtList = (props) => {
  return (
    <FlatList
      data={props.art}
      numColumns={3}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <View style={{ flex: 1, flexDirection: 'column', margin: 2 }}>
          <TouchableOpacity
            key={item.objectID}
            style={{ flex: 1 }}
            onPress={() => {
              if (props.type === 'country') {
                props.navigation.navigate('ArtCard', {
                  artObject: item
                });
              } else {
                Alert.alert('image pressed');
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
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120
  }
});

export default ArtList;
