import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Button = ({text, textStyles, ...props}) => (
  <TouchableOpacity {...props} style={[styles.buttonContainer, props.style]}>
    <Text style={[styles.text, textStyles]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#888',
    width: '100%',
    paddingVertical: 8,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
});
