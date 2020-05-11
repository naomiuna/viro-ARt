import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from "react-native";

export function ScreenShotList(props) {
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "column", margin: 2 }}>
      <Image
        style={{ width: "100%", height: 120 }}
        source={{ uri: `data:image/png;base64,${item.url}` }}
        key={item.count}
      />
    </View>
  );
  return (
    <FlatList
      data={props.ScreenShot}
      numColumns={3}
      //   keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
  const keyExtractor = (item) => item.objectID.toString();
}

export default ScreenShotList;
