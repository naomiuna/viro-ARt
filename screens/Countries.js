import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
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
      'Sria',
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
            <Button
              title={location}
              onPress={() => {
                this.props.navigation.navigate('Country', {
                  country: location,
                });
              }}
              key={location}
            />
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
      height: 10,
      width: 10,
    },
  });
}
