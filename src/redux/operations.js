import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b252df1ca8ad33d4f75f79.mockapi.io/';

export const fetchPosts = createAsyncThunk('fetchPosts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/posts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addPostsThunk = createAsyncThunk('addPost', async (body, thunkAPI) => {
  try {
    const { data } = await axios.post('/posts', body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
  try {
    await axios.delete(`posts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
