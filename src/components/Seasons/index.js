import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Seasons = ({episodes}) =>
  [0, 1, 2, 3, 4].map(i => (
    <Text key={`${i}-season`}>
      <Text style={styles.key}>Season {i + 1}: </Text>
      {
        episodes?.filter(
          url =>
            parseInt(url.replaceAll(/[^\d]/g, ''), 10) >
              (i < 1 ? 0 : 1 + 10 * i) &&
            parseInt(url.replaceAll(/[^\d]/g, ''), 10) <= 11 + 10 * i,
        ).length
      }
    </Text>
  ));

const styles = StyleSheet.create({
  key: {
    fontWeight: 'bold',
  },
});

export default Seasons;
