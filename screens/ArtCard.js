import React from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';

const ArtCard = (props) => {
  const artObject = props.navigation.getParam('artObject', 'default-value');
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 130, height: 200 }}
        source={{ uri: artObject.primaryImage }}
      />
      <View>
        <Text>Title: {artObject.title}</Text>
        <Text>Artist: {artObject.artistDisplayName}</Text>
        <Text>Date: {artObject.objectDate}</Text>
        <Text>
          Period art was created:
          {artObject.period.length === 0 ? 'N/A' : artObject.period}
        </Text>
        <Text>Art location: {artObject.repository}</Text>
      </View>
      <Button title="Save Art to Gallery" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ArtCard;
