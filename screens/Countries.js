import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
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
    ]
  };

  render() {
    const { apiLocations } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 14,
            color: 'white',
            backgroundColor: '#53ab8b'
          }}
        >
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
  }
});
