import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Image,
  TouchableOpacity
} from 'react-native';
import CountryList from '../components/CountryList';

export default class Countries extends React.Component {
  state = {
    apiLocations: [
      { location: 'Africa', flag: '🌍' },
      { location: 'Austria', flag: '🇦🇹' },
      { location: 'Belgium', flag: '🇧🇪' },
      { location: 'China', flag: '🇨🇳' },
      { location: 'Cyprus', flag: '🇨🇾' },
      { location: 'Czech Republic', flag: '🇨🇿' },
      { location: 'Egypt', flag: '🇪🇬' },
      { location: 'France', flag: '🇫🇷' },
      { location: 'Germany', flag: '🇩🇪' },
      { location: 'Greece', flag: '🇬🇷' },
      { location: 'India', flag: '🇮🇳' },
      { location: 'Indonesia', flag: '🇮🇩' },
      { location: 'Iran', flag: '🇮🇷' },
      { location: 'Iraq', flag: '🇮🇶' },
      { location: 'Italy', flag: '🇮🇹' },
      { location: 'Japan', flag: '🇯🇵' },
      { location: 'Korea', flag: '🇰🇷' },
      { location: 'Mexico', flag: '🇲🇽' },
      { location: 'Netherlands', flag: '🇳🇱' },
      { location: 'Pakistan', flag: '🇵🇰' },
      { location: 'Peru', flag: '🇵🇪' },
      { location: 'Republic of Ireland', flag: '🇮🇪' },
      { location: 'Russia', flag: '🇷🇺' },
      { location: 'Spain', flag: '🇪🇸' },
      { location: 'Switzerland', flag: '🇨🇭' },
      { location: 'Syria', flag: '🇸🇾' },
      { location: 'Thailand', flag: '🇹🇭' },
      { location: 'Turkey', flag: '🇹🇷' },
      { location: 'United Kingdom', flag: '🇬🇧' },
      { location: 'United States', flag: '🇺🇸' }
    ],
    firstTime: null
  };

  componentDidMount() {
    this.setState({
      firstTime: this.props.navigation.getParam('firstTime', false)
    });
  }

  render() {
    const { apiLocations } = this.state;
    const { firstTime } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={firstTime}
          onRequestClose={() => {
            this.setState({ firstTime: false });
          }}
        >
          <View style={styles.modalStyle}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeader}>Welcome to WorldARt!</Text>
              <Text style={styles.modalText}>
                Browse the world's most famous art by country and save your
                favourites to your gallery
              </Text>
              <Image
                source={require('../images/IMG_3972.jpg')}
                style={styles.screenshots}
              />
              <Text style={styles.modalText}>
                In AR tab - just aim camera at your wall and click gallery icon
                to select from your favourite art
              </Text>
              <Image
                source={require('../images/IMG_3973.jpg')}
                style={styles.screenshots}
              />
              <Text style={styles.modalText}>
                Drag the artwork to where you want it
              </Text>
              <Text style={styles.modalText}>
                Menu will appear to resize or delete artwork
              </Text>
              <Text style={styles.modalText}>
                Click camera icon to take a screenshot
              </Text>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => {
                  this.setState({ firstTime: false });
                }}
              >
                <Text style={styles.btnText}>DONE!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.header}>
          Choose a continent or country to browse art...
        </Text>
        <CountryList
          locations={apiLocations}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 16,
    fontSize: 14,
    color: 'white',
    backgroundColor: '#53ab8b',
    textAlign: 'center'
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eafff980'
  },
  btnText: {
    color: 'white'
  },
  closeBtn: {
    width: '60%',
    backgroundColor: '#53ab8b',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  modalContainer: {
    backgroundColor: '#fff',
    flex: 1,
    height: '80%',
    width: '85%',
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#53ab8b',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  screenshots: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#53ab8b',
    margin: 2
  },
  modalHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#157759',
    margin: 2
  },
  modalText: {
    color: '#157759',
    textAlign: 'justify',
    marginLeft: 5,
    marginRight: 5
  }
});
