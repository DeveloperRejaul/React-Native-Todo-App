import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {gStyles} from '../../constents/gStyle.js';
import {rf, rh, rw} from '../../constents/responsiveDimensions.js';
import useApi from '../../api/useApi.js';

export default function Profile() {
  const {data, getData, status, loading} = useApi();
  const userId = `63ea4f6c18a44b458c62cb6b`;
  const url = `http://172.24.224.1:3000/api/users/${userId}`;
  useEffect(() => {
    getData(url);
  }, []);
  const [userTodos, setuserTodos] = useState([]);

  useEffect(() => {
    if (status === 200) {
      setuserTodos([...data.user.todos]);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={[gStyles.imageView, styles.imageView]}>
            <Image
              style={gStyles.imageStyle}
              source={require('../../asset/images/download.png')}
            />
          </View>
          <Text style={styles.username}>User Neme</Text>
        </View>

        {userTodos.map(ele => (
          <View style={styles.todoCard}>
            <View style={[gStyles.row, styles.cardHeader]}>
              <Text style={styles.title}>{ele.title}</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.content}>{ele.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1, paddingHorizontal: rw(2)},
  profile: {
    alignItems: 'center',
  },
  imageView: {
    height: rh(10),
    width: rh(10),
  },
  username: {
    fontSize: rf(2.5),
    fontWeight: '800',
    color: '#000',
  },
  todoCard: {
    backgroundColor: '#ecf9ff',
    marginVertical: rh(1),
    borderRadius: 10,
    padding: rh(1),
  },
  title: {
    fontSize: rf(2.5),
    color: '#000',
    fontWeight: '600',
    paddingBottom: rh(0.3),
  },
  content: {fontSize: rf(2.2), color: '#6B728E', fontWeight: '400'},
  cardHeader: {justifyContent: 'space-between', alignItems: 'center'},
  editText: {color: '#6B728E', fontSize: rf(2.2), fontWeight: '400'},
});
