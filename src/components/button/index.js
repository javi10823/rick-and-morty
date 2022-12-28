import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../config/theme';

const Button = ({text, textStyles, ...props}) => (
  <TouchableOpacity {...props} style={[styles.buttonContainer, props.style]}>
    <Text style={[styles.text, textStyles]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.color.gray,
    width: '100%',
    paddingVertical: 8,
  },
  text: {
    color: theme.color.white,
    textAlign: 'center',
  },
});

export default Button;
