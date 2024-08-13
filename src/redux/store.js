import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});
