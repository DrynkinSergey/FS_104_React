import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, goitApi, setToken } from '../../config/goitApi';

export const registerThunk = createAsyncThunk('register', async (credentials, thunkAPI) => {
  try {
    const { data } = await goitApi.post('users/signup', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
  try {
    const { data } = await goitApi.post('users/login', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await goitApi.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const getMeThunk = createAsyncThunk('getMe', async (_, thunkAPI) => {
//   try {
//     const { data } = await goitApi.get('users/current');
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
