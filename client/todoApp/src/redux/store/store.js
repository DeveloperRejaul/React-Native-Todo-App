import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import authReducer from '../futures/authSlice.js';
import splassReducer from '../futures/splassSlice.js';

const reducer = combineReducers({
  auth: authReducer,
  splass: splassReducer,
});

const persistConfig = {
  key: '@root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
