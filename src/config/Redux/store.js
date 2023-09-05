import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './slices/auth';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  // key: 'root',
  version: 100,
  storage: AsyncStorage,
  key: 'root',
  // storage: AsyncStorage,
  // Reducer keys that you do NOT want stored to persistence here.
  // whitelist: ['blacklist'],
  blacklist: ['auth'],
};

const reducer = combineReducers({
  // here we will be adding reducers
  auth,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export default store;
