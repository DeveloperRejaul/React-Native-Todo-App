import {FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardCom from '../../components/CardCom.jsx';
import useApi from '../../api/useApi.js';
import HeaderCom from '../../components/HeaderCom.js';
import LoadingItemsCom from '../../components/LoadingItemsCom.js';
import userInformation from '../../constents/userInformation.js';

export default function Main({navigation}) {
  const {data, getData, loading, status} = useApi();
  const [todosData, setTodosData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const url = `${userInformation.url}todos/`;

  useEffect(() => {
    getData(url);
  }, []);

  useEffect(() => {
    if (status === 200) {
      const newTodo = data.Todos;
      setTodosData([...newTodo]);
    }
  }, [data]);

  // handle refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData(url);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={todosData}
          renderItem={({item}) => <CardCom key={Math.random()} ele={item} />}
          keyExtractor={item => item._id}
        />
      )}
    </>
  );
}
