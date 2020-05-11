import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default class EditArtMenu extends Component {
  state = {};
  render() {
    const { deleteMethod, closeEditMenu, editScale } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.closeButtonStyle}
          onPress={closeEditMenu}
        >
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png'
            }}
            style={{ width: 35, height: 35, marginTop: 1 }}
          />
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Text style={styles.headerText}>Update art size</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => editScale('Large')}
          >
            <Text style={styles.btnText}>Large</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => editScale('Medium')}
          >
            <Text style={styles.btnText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => editScale('Small')}
          >
            <Text style={styles.btnText}>Small</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteMethod} style={styles.deleteBtn}>
            <Text style={styles.deleteBtnTxt}>DELETE ART</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eafff980',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    height: '100%'
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 5,
    right: 9,
    position: 'absolute'
  },
  buttonContainer: {
    height: '60%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: 20
  },
  deleteBtn: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  deleteBtnTxt: {
    color: '#157759'
  },
  btn: {
    width: '80%',
    backgroundColor: '#53ab8b',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  btnText: {
    color: 'white'
  },
  headerText: {
    color: '#157759',
    fontWeight: 'bold'
  }
});
