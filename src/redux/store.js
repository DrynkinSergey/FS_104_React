import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/slice';
import { filterReducer } from './filter/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
