import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {rf, rh} from '../constents/responsiveDimensions.js';
import {Spinner} from 'native-base';

const ButtonCom = ({onPress, text, loading}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {loading ? (
        <Spinner color="cyan.500" />
      ) : (
        <Text style={styles.btn}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCom;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#057dff',
    borderRadius: 10,
    fontSize: rf(2.5),
    textAlign: 'center',
    paddingVertical: rh(0.6),
    fontWeight: '500',
    color: '#fff',
  },
});
