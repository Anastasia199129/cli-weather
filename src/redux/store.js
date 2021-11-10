import { configureStore } from '@reduxjs/toolkit';
import queryReduser from './sities-reduser';

const store = configureStore({
  reducer: {
    сities: queryReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
