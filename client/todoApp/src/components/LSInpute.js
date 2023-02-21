import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {rf, rh, rw} from '../constents/responsiveDimensions.js';

export default function LSInpute({
  lable,
  value,
  onChangeText,
  leftIcon,
  placeholder,
  iconRight,
  secureTextEntry,
  onPressPass,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.inputBody}>
        <View style={styles.inputIcon}>
          <Icon name={leftIcon} size={rf(4)} color={'#000'} />
        </View>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
        {iconRight && (
          <Pressable style={styles.inputIcon} onPress={onPressPass}>
            <Icon name={iconRight} size={rf(4)} color={'#000'} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: rh(1),
  },
  inputBody: {
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#000',
    overflow: 'hidden',
    marginBottom: rh(1),
  },
  textInput: {
    padding: 0,
    fontSize: rf(2.5),
    paddingHorizontal: rw(3),
    paddingVertical: rh(0.5),
    width: '80%',
  },
  inputIcon: {
    width: rw(10),
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rh(0.5),
  },
  lable: {
    fontSize: rf(2.2),
    color: '#000',
    fontWeight: '500',
    paddingBottom: rh(1),
  },
});
