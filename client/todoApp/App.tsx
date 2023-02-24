import React from 'react';
import {Provider} from 'react-redux';
import Route from './src/navigation/Routes/Route.tsx';
import {persistStore} from 'redux-persist';
import {store} from './src/redux/store/store.js';
import {PersistGate} from 'redux-persist/integration/react';
export default function App() {
  const persiStore = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiStore}>
        <Route />
      </PersistGate>
    </Provider>
  );
}
