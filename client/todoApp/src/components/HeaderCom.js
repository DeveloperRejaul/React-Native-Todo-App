import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {rf, rh} from '../constents/responsiveDimensions.js';
import Icon from 'react-native-vector-icons/Ionicons.js';

export default function HeaderCom({
  text = '',
  onPress = () => {},
  drawerHeader = false,
}) {
  const DrawerIcon = <Icon name="menu" size={rf(4)} color="#000" />;
  const BackIcon = <Icon name="arrow-back" size={rf(4)} color="#000" />;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        {drawerHeader ? DrawerIcon : BackIcon}
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rh(5),
    paddingHorizontal: rh(1),
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: rf(2.8),
  },
});
