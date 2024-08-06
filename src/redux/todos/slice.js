import { createSlice } from '@reduxjs/toolkit';
import { deleteTodoThunk, fetchTodosThunk } from './operations';
// 1.
const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

// 2.
const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodosThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});
// 3.
export const todosReducer = slice.reducer;
export const { deleteTodo, addTodo } = slice.actions;
