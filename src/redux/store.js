import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
