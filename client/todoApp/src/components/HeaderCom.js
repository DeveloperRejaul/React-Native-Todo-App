import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {rf} from '../constents/responsiveDimensions.js';
import Icon from 'react-native-vector-icons/Ionicons.js';

export default function HeaderCom({text, onPress}) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onPress}>
        <Icon name="arrow-back" size={rf(4)} color="#000" />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  text: {},
});
