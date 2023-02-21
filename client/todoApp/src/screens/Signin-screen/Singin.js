import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import LSInpute from '../../components/LSInpute.js';
import ButtonCom from '../../components/ButtonCom.js';
import navString from '../../constents/navString.js';
import {rf, rh, rw} from '../../constents/responsiveDimensions.js';
export default function Singin({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [image, setImage] = useState({name: 'not select image', url: ''});
  const [passwordVesiblity, setpasswordVesiblity] = useState(true);
  const [conPasswordVesiblity, setConPasswordVesiblity] = useState(true);

  const handelPicture = async () => {
    const result = await launchImageLibrary();
    const {uri, fileName} = result.assets[0];
    setImage({
      name: fileName,
      url: uri,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <>
        <LSInpute
          leftIcon={'md-person-outline'}
          value={name}
          onChangeText={setName}
          lable={'Name'}
          placeholder={'Type Name'}
        />
        <LSInpute
          leftIcon={'mail-outline'}
          value={email}
          onChangeText={setEmail}
          lable={'Email'}
          placeholder={'Type Email'}
        />
        <LSInpute
          leftIcon={'lock-closed-outline'}
          value={password}
          onChangeText={setPassword}
          lable={'Password'}
          placeholder={'Type Password'}
          secureTextEntry={passwordVesiblity}
          onPressPass={() => setpasswordVesiblity(pre => !pre)}
          iconRight={passwordVesiblity ? 'eye-off-outline' : 'eye-outline'}
        />
        <LSInpute
          leftIcon={'lock-closed-outline'}
          value={comfirmPassword}
          onChangeText={setComfirmPassword}
          lable={'Confirm Password'}
          placeholder={'Type Confirm Password'}
          secureTextEntry={conPasswordVesiblity}
          onPressPass={() => setConPasswordVesiblity(pre => !pre)}
          iconRight={conPasswordVesiblity ? 'eye-off-outline' : 'eye-outline'}
        />
        <View style={[styles.row, styles.imageBody]}>
          <TouchableOpacity style={styles.picImage}>
            <Text style={styles.picBtnText} onPress={() => handelPicture()}>
              Choich Image
            </Text>
          </TouchableOpacity>
          <Text style={styles.imgName}>{image.name}</Text>
        </View>
      </>

      <ButtonCom text={'Singin'} />
      <View style={[styles.row]}>
        <Text style={styles.reg}>You are not registered pleace goto</Text>
        <Text
          style={styles.reginner}
          onPress={() => navigation.navigate(navString.Login)}>
          Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rw(2),
  },
  picImage: {
    borderWidth: 1,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#ddd',
  },
  picBtnText: {
    color: '#000',
    fontWeight: '600',
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
  },
  imgName: {
    marginLeft: rw(2),
    width: '70%',
    overflow: 'hidden',
  },
  imageBody: {
    justifyContent: 'flex-start',
    marginVertical: rh(1),
  },
});
