import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";

export default class EditArtMenu extends Component {
  state = {
    isLoading: false,
    Data: [
      {
        primaryImage:
          "https://w7.pngwing.com/pngs/41/41/png-transparent-red-x-button-icon-error-http-404-icon-red-cross-mark-file-miscellaneous-trademark-heart.png",
        objectID: "436535",
      },
    ],
  };
  render() {
    const { Data, isLoading } = this.state;
    const { deleteMethod, closeEditMenu, editScale } = this.props;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching your favourite art</Text>
        ) : (
          <FlatList
            numColumns={1}
            data={Data}
            renderItem={({ item }) => [
              <Button
                primaryImage={item.primaryImage}
                deleteArt={deleteMethod}
              />,
              <CloseMenu closeEditMenu={closeEditMenu} />,
              <EditScale editScale={editScale} />,
            ]}
            keyExtractor={(item) => item.objectID}
          ></FlatList>
        )}
      </View>
    );
  }
}

function Button({ primaryImage, deleteArt }) {
  return (
    <View style={styles.artItem}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => deleteArt()}
      >
        <Image
          source={{ uri: primaryImage }}
          style={{ width: 130, height: 200 }}
        />
      </TouchableOpacity>
    </View>
  );
}
function CloseMenu({ closeEditMenu }) {
  return (
    <View style={styles.artItem}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => closeEditMenu()}
      >
        <Text>Close Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

function EditScale({ editScale }) {
  return (
    <View>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => editScale("Large")}
      >
        <Text>Large</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => editScale("Medium")}
      >
        <Text>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => editScale("Small")}
      >
        <Text>Small</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(150,150,150,0.5)",
    width: 200,
    alignItems: "center",
    position: "absolute",
    right: -100,
    height: "100%",
  },
});
