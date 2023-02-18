import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderCom from '../../components/HeaderCom.js';
import {rf, rh, rw} from '../../constents/responsiveDimensions.js';
export default function CardDetels(props) {
  const {navigation, route} = props;
  const {data} = route.params;
  return (
    <>
      <HeaderCom text={'Detels Todo'} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.users}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageStyle}
                source={{uri: `${data.user.profilePic}`}}
              />
            </View>
            <Text style={styles.username}>{data.user.name}</Text>
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.content}>{data.content}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(2),
  },
  imageView: {
    height: rh(7),
    backgroundColor: '#ddd',
    width: rh(7),
    borderRadius: 100,
    overflow: 'hidden',
    marginVertical: rh(1),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  users: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: rf(2.5),
    fontWeight: '800',
    marginLeft: rw(2),
    color: '#000',
  },
  title: {
    color: '#000',
    fontSize: rf(2.5),
    fontWeight: '600',
    paddingTop: rh(1),
    paddingBottom: rh(0.2),
  },
  content: {
    color: '#6B728E',
    fontSize: rf(2.2),
    fontWeight: '400',
  },
});
