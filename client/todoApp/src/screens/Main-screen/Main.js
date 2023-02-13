import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardCom from '../../components/CardCom.jsx';
import useApi from '../../api/useApi.js';
import {rh} from '../../constents/responsiveDimensions.js';

export default function Main() {
  const {data, error, getData, loading, status} = useApi();
  const [todosData, setTodosData] = useState([]);

  useEffect(() => {
    getData('http://192.168.21.182:3000/api/todos/');
  }, []);

  useEffect(() => {
    if (status === 200) {
      const newTodo = data.Todos;
      setTodosData([...newTodo]);
    }
  }, [data]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollBody}>
        {todosData &&
          todosData.map(ele => <CardCom key={Math.random()} {...{ele}} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({scrollBody: {paddingBottom: rh(3)}});
