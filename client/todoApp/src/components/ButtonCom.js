import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {rf, rh} from '../constents/responsiveDimensions.js';
import {Spinner, View} from 'native-base';

const ButtonCom = ({onPress, text, loading}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        {loading ? (
          <Spinner color="#fff" />
        ) : (
          <Text style={styles.btnText}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCom;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#057dff',
    borderRadius: 10,
    paddingVertical: rh(0.8),
  },
  btnText: {
    fontSize: rf(2.5),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});
