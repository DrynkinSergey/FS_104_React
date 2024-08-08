import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './postsSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
