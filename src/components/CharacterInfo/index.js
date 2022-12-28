import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CharacterInfo = ({text, title}) => (
  <Text>
    <Text style={styles.key}>{title}</Text> {text}
  </Text>
);

const styles = StyleSheet.create({
  key: {
    fontWeight: 'bold',
  },
});

export default CharacterInfo;
