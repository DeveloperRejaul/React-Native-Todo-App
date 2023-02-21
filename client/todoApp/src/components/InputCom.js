import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {rf, rh, rw} from '../constents/responsiveDimensions.js';

export default function InputCom({
  lable,
  maxLength,
  value,
  onChangeText,
  placeholder,
  multiline,
  inputStyle,
  lableStyle,
  containerStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.lable, lableStyle]}>{lable} </Text>
      <TextInput
        style={[styles.TextInput, inputStyle]}
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderBottomWidth: 1,
    padding: 0,
    fontSize: rf(2.5),
    borderBottomColor: '#414141',
    color: '#6B728E',
    paddingHorizontal: rw(2),
    paddingVertical: rh(0.4),
    // backgroundColor: '#eceff1',
    maxHeight: rh(10),
  },
  lable: {
    fontSize: rf(2.2),
    color: '#6B728E',
    fontWeight: '400',
    paddingBottom: rh(0.3),
  },
  container: {
    marginVertical: rh(2),
  },
});
