import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import authReducer from '../futures/authSlice.js';

// const reducer = combineReducers({
//   auth: authReducer,
// });

const persistConfig = {
  key: '@root',
  storage: AsyncStorage,
  //   whitelist: ['Splass'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
