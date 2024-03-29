import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {rf, rh, rw} from '../constents/responsiveDimensions.js';
import Icon from 'react-native-vector-icons/Ionicons.js';
import navString from '../constents/navString.js';
import {useNavigation} from '@react-navigation/native';
import Convator from '../utilits/convater.js';

export default function CardCom({ele}) {
  const nav = useNavigation();
  const {title, content, user} = ele;
  const {name, image} = user;

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Pressable style={styles.ProfileImage}>
          <Image
            style={styles.image}
            source={{uri: `${Convator.urlConvator(image)}`}}
          />
        </Pressable>
        <Text style={styles.userName}>{name}</Text>
      </View>
      <Pressable
        style={styles.cardBody}
        onPress={() =>
          nav.navigate(navString.CardDetels, {
            data: ele,
          })
        }>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.items} ellipsizeMode="tail" numberOfLines={4}>
            {content}
          </Text>
        </View>
        <Pressable style={styles.icon}>
          <Icon name="chevron-forward-sharp" color="#6B728E" size={rf(4)} />
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: '#ffffff81',
    padding: rw(2),
    borderRadius: rf(1),
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: rh(15),
  },
  title: {fontSize: rf(2.5), color: '#000'},
  items: {fontSize: rf(2), color: '#6B728E'},
  content: {width: '94%'},
  icon: {justifyContent: 'center', alignItems: 'center', width: '6%'},
  ProfileImage: {
    height: rh(5),
    width: rh(5),
    overflow: 'hidden',
    borderRadius: 100,
  },
  image: {height: '100%', width: '100%'},
  profile: {flexDirection: 'row', alignItems: 'center', padding: rw(1)},
  container: {
    paddingHorizontal: rw(2),
    backgroundColor: '#ecf9ff',
    padding: rw(2),
    borderRadius: rf(2),
    marginTop: rh(1),
  },
  userName: {
    color: '#000',
    fontSize: rf(2.3),
    fontWeight: '700',
    marginLeft: rw(1),
  },
});
