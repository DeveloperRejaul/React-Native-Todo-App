import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardCom from '../../components/CardCom.jsx';
import useApi from '../../api/useApi.js';
import HeaderCom from '../../components/HeaderCom.js';
import LoadingItemsCom from '../../components/LoadingItemsCom.js';

export default function Main({navigation}) {
  const {data, getData, loading, status} = useApi();
  const [todosData, setTodosData] = useState([]);

  useEffect(() => {
    getData('http://192.168.179.182:3000/api/todos/');
  }, []);

  useEffect(() => {
    if (status === 200) {
      const newTodo = data.Todos;
      setTodosData([...newTodo]);
    }
  }, [data]);

  return (
    <>
      <HeaderCom
        text="All Todos"
        drawerHeader={true}
        onPress={() => navigation.openDrawer()}
      />
      {loading ? (
        <LoadingItemsCom />
      ) : (
        <FlatList
          data={todosData}
          renderItem={({item}) => <CardCom key={Math.random()} ele={item} />}
          keyExtractor={item => item._id}
        />
      )}
    </>
  );
}
