import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputCom from '../../components/InputCom.js';
import {rf, rh, rw} from '../../constents/responsiveDimensions.js';
import useApi from '../../api/useApi.js';
import userInformation from '../../constents/userInformation.js';
import ButtonCom from '../../components/ButtonCom.js';
import ToastCom from '../../components/ToastCom.js';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function CreateTodo({route, navigation}) {
  const [title, settitle] = useState('');
  const [content, setContent] = useState('');
  const {postData, status, loading, putData} = useApi();
  const [slideIsOpen, setSlideIsOpen] = useState(false);
  const [isUpdateTodo, setIsUpdateTodo] = useState(false);
  const [todoId, setTodoId] = useState('');
  const userId = useSelector(state => state.auth.userId);

  // get all route params
  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.isUpdate) {
        var {updateTitle, updateContent, todoId} = route.params;
        setIsUpdateTodo(true);
        settitle(updateTitle);
        setContent(updateContent);
        setTodoId(todoId);
      }
    }
  }, [route]);

  // Update Todo
  const updatePost = async () => {
    await putData(`${userInformation.url}todos/`, {
      todoId: todoId,
      title: title,
      content: content,
    });
    settitle('');
    setContent('');
    setSlideIsOpen(true);
    navigation.setParams({
      isUpdate: false,
    });
    setTimeout(() => {
      setSlideIsOpen(false);
      setIsUpdateTodo(false);
    }, 5000);
  };

  // Create Post function
  const createPost = async () => {
    await postData(`${userInformation.url}todos/`, {
      title: title,
      content: content,
      userId: userId,
    });
    setSlideIsOpen(true);
    settitle('');
    setContent('');
    setTimeout(() => {
      setSlideIsOpen(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={title}
          onChangeText={settitle}
          placeholder={'Todo Title'}
          style={styles.title}
          placeholderTextColor="#000"
        />
        <View style={styles.discription}>
          <TextInput
            value={content}
            onChangeText={setContent}
            multiline={true}
            placeholder="Write todo content"
            style={styles.discriptionInput}
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <ToastCom
        status={status}
        isOpen={slideIsOpen}
        text={
          isUpdateTodo ? 'Todo update succesfully' : 'Todo Create succesfully'
        }
      />
      <ButtonCom
        text={isUpdateTodo ? 'Update Todo' : 'Add Todo'}
        onPress={isUpdateTodo ? updatePost : createPost}
        loading={loading}
      />
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
    paddingVertical: rh(1),
  },
  title: {
    borderWidth: 2,
    borderRadius: 5,
    fontSize: rf(2.2),
    fontWeight: '800',
    paddingHorizontal: rw(5),
    borderColor: '#2d224a',
    backgroundColor: '#dbdbdba4',
    color: '#000',
  },
  discription: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: rw(5),
    borderColor: '#2d224a',
    backgroundColor: '#dbdbdba4',
    marginTop: rh(1),
    height: rh(30),
  },
  discriptionInput: {
    color: '#000',
    fontSize: rf(2.2),
    fontWeight: '600',
  },
});
