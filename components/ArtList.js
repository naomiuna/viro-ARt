import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal
} from 'react-native';

class ArtList extends Component {
  state = {
    refreshing: false,
    ModalVisibleStatus: false,
    modalImgURI: ''
  };
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
          <View style={styles.modelStyle}>
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
          data={this.props.art}
          numColumns={3}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            if (this.props.type === 'profile') {
              this.props.fetchArt();
            }
          }}
        />
      );
    }
  }
  keyExtractor = (item) => {
    return item.objectID + (Math.random() * 100).toString();
  };

  showModalFunction = (ModalVisibleStatus, modalImgURI) => {
    this.setState({ ModalVisibleStatus, modalImgURI });
  };

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 2 }}>
        <TouchableOpacity
          style={{ flex: 1 / 3, aspectRatio: 1 }}
          onPress={() => {
            if (this.props.type === 'country') {
              this.props.navigation.navigate('ArtCard', {
                artObject: item
              });
            } else {
              this.showModalFunction(true, item.primaryImage);
            }
          }}
        >
          <Image style={styles.image} source={{ uri: item.primaryImage }} />
        </TouchableOpacity>
      </View>
    );
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
  modelStyle: {
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
  }
});

export default ArtList;
