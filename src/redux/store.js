import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/slice';
import { todosReducer } from './todos/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    filter: filterReducer,
  },
});
