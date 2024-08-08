import { createSlice } from '@reduxjs/toolkit';
import { addPostsThunk, deleteTodoThunk, fetchPosts } from './operations';

const initialState = {
  posts: [],
};

const slice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPostsThunk.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
      });
  },
});

export const postReducer = slice.reducer;
