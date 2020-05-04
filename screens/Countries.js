import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Countries extends React.Component {
  state = {
    apiLocations: [
      'Africa',
      'Austria',
      'Belgium',
      'China',
      'Columbia',
      'Cyprus',
      'Czech Republic',
      'Egypt',
      'France',
      'Germany',
      'Greece',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Italy',
      'Japan',
      'Korea',
      'Mexico',
      'Netherlands',
      'Pakistan',
      'Peru',
      'Republic of Ireland',
      'Russia',
      'Spain',
      'Switzerland',
      'Syria',
      'Thailand',
      'Turkey',
      'United Kingdom',
      'United States',
    ],
  };

  render() {
    return (
      <ScrollView style={this.styles.container}>
        {this.state.apiLocations.map((location) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Country', {
                  country: location,
                });
              }}
              key={location}
            >
              {location === 'United Kingdom' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/united-kingdom-flag-small.jpg')}
                />
              ) : location === 'United States' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/united-states-of-america-flag-small.jpg')}
                />
              ) : location === 'Korea' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/south-korea-flag-small.jpg')}
                />
              ) : location === 'Czech Republic' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/czech-republic-flag-small.jpg')}
                />
              ) : location === 'Austria' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Austria-flag-small.jpg')}
                />
              ) : location === 'Belgium' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Belgium-flag-small.jpg')}
                />
              ) : location === 'China' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/China-flag-small.jpg')}
                />
              ) : location === 'Colombia' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Colombia-flag-small.jpg')}
                />
              ) : location === 'Cyprus' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Cyprus-flag-small.jpg')}
                />
              ) : location === 'Egypt' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Egypt-flag-small.jpg')}
                />
              ) : location === 'France' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/France-flag-small.jpg')}
                />
              ) : location === 'Germany' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Germany-flag-small.jpg')}
                />
              ) : location === 'Greece' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Greece-flag-small.jpg')}
                />
              ) : location === 'India' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/India-flag-small.jpg')}
                />
              ) : location === 'Indonesia' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Indonesia-flag-small.jpg')}
                />
              ) : location === 'Iran' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Iran-flag-small.jpg')}
                />
              ) : location === 'Iraq' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Iraq-flag-small.jpg')}
                />
              ) : location === 'Ireland' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Ireland-flag-small.jpg')}
                />
              ) : location === 'Italy' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Italy-flag-small.jpg')}
                />
              ) : location === 'Japan' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Japan-flag-small.jpg')}
                />
              ) : location === 'Mexico' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Mexico-flag-small.jpg')}
                />
              ) : location === 'Netherlands' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Netherlands-flag-small.jpg')}
                />
              ) : location === 'Pakistan' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Pakistan-flag-small.jpg')}
                />
              ) : location === 'Peru' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Peru-flag-small.jpg')}
                />
              ) : location === 'Russia' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Russia-flag-small.jpg')}
                />
              ) : location === 'Spain' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Spain-flag-small.jpg')}
                />
              ) : location === 'Switzerland' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Switzerland-flag-small.jpg')}
                />
              ) : location === 'Syria' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Syria-flag-small.jpg')}
                />
              ) : location === 'Thailand' ? (
                <Image
                  style={this.styles.button}
                  source={require('../images/Thailand-flag-small.jpg')}
                />
              ) : (
                location === 'Turkey' && (
                  <Image
                    style={this.styles.button}
                    source={require('../images/Turkey-flag-small.jpg')}
                  />
                )
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
  styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    button: {
      flex: 1,
    },
  });
}
