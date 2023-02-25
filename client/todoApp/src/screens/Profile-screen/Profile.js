import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {gStyles} from '../../constents/gStyle.js';
import {rf, rh, rw} from '../../constents/responsiveDimensions.js';
import useApi from '../../api/useApi.js';
import userInformation from '../../constents/userInformation.js';
import LoadingItemsCom from '../../components/LoadingItemsCom.js';
import navString from '../../constents/navString.js';

export default function Profile({navigation}) {
  const {data, getData, status, loading, deleteData} = useApi();
  const url = `${userInformation.url}users/${userInformation.userId}`;
  const [userTodos, setuserTodos] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUser] = useState({image: null, name: null});

  // fetch todos
  useEffect(() => {
    getData(url);
  }, []);

  // set todos in state
  useEffect(() => {
    if (status === 200) {
      setUser({image: data.user.image, name: data.user.name});
      setuserTodos([...data.user.todos]);
    }
  }, [data]);

  // delete todos
  const deleteTodo = async id => {
    await deleteData(`${userInformation.url}todos/`, {todoId: id});
    await getData(url);
  };

  // handle refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData(url);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.profile}>
          <View style={[gStyles.imageView, styles.imageView]}>
            <Image
              style={gStyles.imageStyle}
              source={{uri: `${user.image}`}}
              defaultSource={require('../../asset/images/download.png')}
            />
          </View>
          <Text style={styles.username}>{user.name}</Text>
        </View>
        {loading ? (
          <LoadingItemsCom />
        ) : (
          userTodos.map((ele, i) => (
            <View key={i} style={styles.todoCard}>
              <View style={[gStyles.row, styles.cardHeader]}>
                <Text style={styles.title}>{ele.title}</Text>
                <View style={[gStyles.row]}>
                  <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => deleteTodo(ele._id)}>
                    <Text style={styles.btntext}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.Btn}
                    onPress={() =>
                      navigation.navigate(navString.CreateTodo, {
                        updateTitle: ele.title,
                        updateContent: ele.content,
                        todoId: ele._id,
                        isUpdate: true,
                      })
                    }>
                    <Text style={styles.btntext}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.content}>{ele.content}</Text>
            </View>
          ))
        )}
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
  btntext: {
    color: '#fff',
    fontSize: rf(2.2),
    fontWeight: '500',
    textAlign: 'center',
  },
  Btn: {
    backgroundColor: '#057dff',
    marginRight: rw(2),
    paddingHorizontal: rw(2),
    borderRadius: 5,
  },
});
