import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rf, rh, rw} from '../../constents/responsiveDimensions.js';
import LSInpute from '../../components/LSInpute.js';
import ButtonCom from '../../components/ButtonCom.js';
import navString from '../../constents/navString.js';
import useApi from '../../api/useApi.js';
import userInformation from '../../constents/userInformation.js';
import {useDispatch} from 'react-redux';
import {login, setUserData} from '../../redux/futures/authSlice.js';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVesiblity, setpasswordVesiblity] = useState(true);
  const {postData, status, loading, data} = useApi();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    await postData(`${userInformation.url}users/login`, {email, password});
  };

  useEffect(() => {
    if (data) {
      dispatch(setUserData(data));
      if (status === 200) dispatch(login());
    }
  }, [data, status]);

  return (
    <View style={styles.container}>
      <View style={styles.innerCotainer}>
        <LSInpute
          leftIcon={'mail-outline'}
          value={email}
          onChangeText={setEmail}
          lable={'Email'}
          placeholder={'Type Email'}
        />
        <LSInpute
          iconRight={passwordVesiblity ? 'eye-off-outline' : 'eye-outline'}
          leftIcon={'lock-closed-outline'}
          value={password}
          onChangeText={setPassword}
          lable={'Password'}
          placeholder={'Type Password'}
          secureTextEntry={passwordVesiblity}
          onPressPass={() => setpasswordVesiblity(pre => !pre)}
        />
      </View>
      <View>
        <ButtonCom text={'Login'} loading={loading} onPress={handleLogin} />
        <View style={[styles.row]}>
          <Text style={styles.reg}>You are not registered pleace goto</Text>
          <Text
            style={styles.reginner}
            onPress={() => navigation.navigate(navString.Singin)}>
            singin
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rw(2),
    paddingTop: rh(1),
    justifyContent: 'center',
    paddingVertical: rh(2),
  },
  reg: {
    marginTop: rh(1),
    color: '#1e1e1e',
    fontSize: rf(2.2),
  },
  reginner: {
    marginTop: rh(1),
    color: '#1e1e1e',
    fontSize: rf(2.2),
    fontWeight: '600',
    paddingLeft: rw(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
});
