import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputCom from '../../components/InputCom.js';
import {rh, rw} from '../../constents/responsiveDimensions.js';
import useApi from '../../api/useApi.js';
import userInformation from '../../constents/userInformation.js';
import ButtonCom from '../../components/ButtonCom.js';
import ToastCom from '../../components/ToastCom.js';
import {useNavigation} from '@react-navigation/native';

export default function CreateTodo({route, navigation}) {
  const [title, settitle] = useState('');
  const [content, setContent] = useState('');
  const {postData, status, loading, putData} = useApi();
  const [slideIsOpen, setSlideIsOpen] = useState(false);
  const [isUpdateTodo, setIsUpdateTodo] = useState(false);
  const [todoId, setTodoId] = useState('');

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
      userId: userInformation.userId,
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
      <ToastCom
        status={status}
        isOpen={slideIsOpen}
        text={
          isUpdateTodo ? 'Todo update succesfully' : 'Todo Create succesfully'
        }
      />
      <ButtonCom
        text={isUpdateTodo ? 'Update' : 'Create'}
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
  },
});
