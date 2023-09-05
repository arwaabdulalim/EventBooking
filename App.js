import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/config/navigation/Auth';
import Main from './src/config/navigation/Main';
import Root from './src/config/navigation/Root';
import {Provider, useDispatch, useSelector} from 'react-redux';

import store from './src/config/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const App = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
