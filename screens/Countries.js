import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CountryList from '../components/CountryList';

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
            <CountryList
              location={location}
              navigation={this.props.navigation}
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
  });
}
