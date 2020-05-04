import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const CountryList = (props) => {
  return (
    <TouchableOpacity
      style={{ padding: 5 }}
      onPress={() => {
        props.navigation.navigate('Country', {
          country: props.location,
        });
      }}
      key={props.location}
    >
      {props.location === 'United Kingdom' ? (
        <Image
          style={styles.image}
          source={require('../images/united-kingdom-flag-small.jpg')}
        />
      ) : props.location === 'United States' ? (
        <Image
          style={styles.image}
          source={require('../images/united-states-of-america-flag-small.jpg')}
        />
      ) : props.location === 'Korea' ? (
        <Image
          style={styles.image}
          source={require('../images/south-korea-flag-small.jpg')}
        />
      ) : props.location === 'Czech Republic' ? (
        <Image
          style={styles.image}
          source={require('../images/czech-republic-flag-small.jpg')}
        />
      ) : props.location === 'Austria' ? (
        <Image
          style={styles.image}
          source={require('../images/Austria-flag-small.jpg')}
        />
      ) : props.location === 'Belgium' ? (
        <Image
          style={styles.image}
          source={require('../images/Belgium-flag-small.jpg')}
        />
      ) : props.location === 'China' ? (
        <Image
          style={styles.image}
          source={require('../images/China-flag-small.jpg')}
        />
      ) : props.location === 'Colombia' ? (
        <Image
          style={styles.image}
          source={require('../images/Colombia-flag-small.jpg')}
        />
      ) : props.location === 'Cyprus' ? (
        <Image
          style={styles.image}
          source={require('../images/Cyprus-flag-small.jpg')}
        />
      ) : props.location === 'Egypt' ? (
        <Image
          style={styles.image}
          source={require('../images/Egypt-flag-small.jpg')}
        />
      ) : props.location === 'France' ? (
        <Image
          style={styles.image}
          source={require('../images/France-flag-small.jpg')}
        />
      ) : props.location === 'Germany' ? (
        <Image
          style={styles.image}
          source={require('../images/Germany-flag-small.jpg')}
        />
      ) : props.location === 'Greece' ? (
        <Image
          style={styles.image}
          source={require('../images/Greece-flag-small.jpg')}
        />
      ) : props.location === 'India' ? (
        <Image
          style={styles.image}
          source={require('../images/India-flag-small.jpg')}
        />
      ) : props.location === 'Indonesia' ? (
        <Image
          style={styles.image}
          source={require('../images/Indonesia-flag-small.jpg')}
        />
      ) : props.location === 'Iran' ? (
        <Image
          style={styles.image}
          source={require('../images/Iran-flag-small.jpg')}
        />
      ) : props.location === 'Iraq' ? (
        <Image
          style={styles.image}
          source={require('../images/Iraq-flag-small.jpg')}
        />
      ) : props.location === 'Ireland' ? (
        <Image
          style={styles.image}
          source={require('../images/Ireland-flag-small.jpg')}
        />
      ) : props.location === 'Italy' ? (
        <Image
          style={styles.image}
          source={require('../images/Italy-flag-small.jpg')}
        />
      ) : props.location === 'Japan' ? (
        <Image
          style={styles.image}
          source={require('../images/Japan-flag-small.jpg')}
        />
      ) : props.location === 'Mexico' ? (
        <Image
          style={styles.image}
          source={require('../images/Mexico-flag-small.jpg')}
        />
      ) : props.location === 'Netherlands' ? (
        <Image
          style={styles.image}
          source={require('../images/Netherlands-flag-small.jpg')}
        />
      ) : props.location === 'Pakistan' ? (
        <Image
          style={styles.image}
          source={require('../images/Pakistan-flag-small.jpg')}
        />
      ) : props.location === 'Peru' ? (
        <Image
          style={styles.image}
          source={require('../images/Peru-flag-small.jpg')}
        />
      ) : props.location === 'Russia' ? (
        <Image
          style={styles.image}
          source={require('../images/Russia-flag-small.jpg')}
        />
      ) : props.location === 'Spain' ? (
        <Image
          style={styles.image}
          source={require('../images/Spain-flag-small.jpg')}
        />
      ) : props.location === 'Switzerland' ? (
        <Image
          style={styles.image}
          source={require('../images/Switzerland-flag-small.jpg')}
        />
      ) : props.location === 'Syria' ? (
        <Image
          style={styles.image}
          source={require('../images/Syria-flag-small.jpg')}
        />
      ) : props.location === 'Thailand' ? (
        <Image
          style={styles.image}
          source={require('../images/Thailand-flag-small.jpg')}
        />
      ) : (
        props.location === 'Turkey' && (
          <Image
            style={styles.image}
            source={require('../images/Turkey-flag-small.jpg')}
          />
        )
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { height: 250, width: 400 },
});

export default CountryList;
