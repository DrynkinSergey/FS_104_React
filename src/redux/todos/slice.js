import { createSlice } from '@reduxjs/toolkit';
import { deleteTodoThunk, fetchTodosThunk, addTodoThunk } from './operations';
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
      })
      .addCase(deleteTodoThunk.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const todosReducer = slice.reducer;
