import { createSlice } from '@reduxjs/toolkit';
// 1.
const initialState = {
  items: [{ id: 1, todo: 'Learn Redux' }],
};

// 2.
const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});
// 3.
export const todosReducer = slice.reducer;
export const { deleteTodo } = slice.actions;
