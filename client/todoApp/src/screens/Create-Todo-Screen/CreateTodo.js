import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputCom from '../../components/InputCom.js';
import {rf, rh, rw} from '../../constents/responsiveDimensions.js';

export default function CreateTodo() {
  const [title, settitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <InputCom
          value={title}
          onChangeText={settitle}
          placeholder={'Todo Title'}
        />
        <InputCom
          value={content}
          onChangeText={setContent}
          multiline={true}
          placeholder="Write todo content"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.btn}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rw(2),
    paddingTop: rh(2),
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#057dff',
    borderRadius: 10,
    fontSize: rf(2.5),
    textAlign: 'center',
    paddingVertical: rh(0.6),
    fontWeight: '500',
    color: '#fff',
  },
});
