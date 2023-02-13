import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderCom from '../../components/HeaderCom.js';

export default function CardDetels({navigation}) {
  return (
    <>
      <HeaderCom text={'Detels Todo'} onPress={() => navigation.goBack()} />
      <View>
        <Text>CardDetels</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
