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
                  styles={this.styles.button}
                  source={require('../images/united-kingdom-flag-small.jpg')}
                />
              ) : location === 'United States' ? (
                <Image
                  styles={this.styles.button}
                  source={require('../images/united-states-of-america-flag-small.jpg')}
                />
              ) : location === 'Korea' ? (
                <Image
                  styles={this.styles.button}
                  source={require('../images/south-korea-flag-small.jpg')}
                />
              ) : location === 'Czech Republic' ? (
                <Image
                  styles={this.styles.button}
                  source={require('../images/czech-republic-flag-small.jpg')}
                />
              ) : (
                // <Image
                //   style={this.styles.button}
                //   source={require(`../images/${location}-flag-small.jpg`)}
                // />
                <Button
                  title={`${location}`}
                  onPress={() => {
                    this.props.navigation.navigate('Country', {
                      country: location,
                    });
                  }}
                />
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
      height: 100,
      width: 200,
    },
  });
}
