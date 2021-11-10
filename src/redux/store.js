import { configureStore } from '@reduxjs/toolkit';
import queryReduser from './sities-reduser';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReduser = combineReducers({
  сities: queryReduser,
});

const persistRduser = persistReducer(persistConfig, rootReduser);

const store = configureStore({
  reducer: persistRduser,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { persistor, store };
