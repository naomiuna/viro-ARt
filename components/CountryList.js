import React from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const CountryList = (props) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={props.locations}
      keyExtractor={(item) => item.location}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.listItem}
            key={item.objectID}
            onPress={() => {
              props.navigation.navigate('Country', {
                country: item.location
              });
            }}
          >
            {item.flag && <Text style={styles.emoji}>{item.flag}</Text>}
            <Text style={styles.country}>{item.location}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 2,
    padding: 5,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  emoji: {
    fontSize: 40,
    flex: 1
  },
  country: {
    flex: 3,
    fontSize: 30,
    textAlign: 'center'
  }
});

export default CountryList;
