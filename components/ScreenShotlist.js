import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal
} from 'react-native';

class ScreenShotList extends Component {
  state = {
    ModalVisibleStatus: false,
    modalImgURI: ''
  };
  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() =>
        this.showModalFunction(true, `data:image/png;base64,${item.url}`)
      }
    >
      <Image
        style={{ width: '100%', height: 120 }}
        source={{ uri: `data:image/png;base64,${item.url}` }}
      />
    </TouchableOpacity>
  );
  render() {
    if (this.state.ModalVisibleStatus) {
      return (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={() => {
            this.showModalFunction(false, '');
          }}
        >
          <View style={styles.modalStyle}>
            <Image
              style={styles.fullImageStyle}
              source={{ uri: this.state.modalImgURI }}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                this.showModalFunction(false, '');
              }}
            >
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png'
                }}
                style={{ width: 35, height: 35, marginTop: 16 }}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      );
    } else {
      return (
        <FlatList
          data={this.props.ScreenShot}
          numColumns={3}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      );
    }
  }
  keyExtractor = (item) => item.count + (Math.random() * 100).toString();
  showModalFunction = (ModalVisibleStatus, modalImgURI) => {
    this.setState({ ModalVisibleStatus, modalImgURI });
  };
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120,
    flex: 1
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain'
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute'
  },
  imageContainer: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 2
  }
});

export default ScreenShotList;
