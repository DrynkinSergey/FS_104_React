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

// Операція робить запит за нашими даними (name, email)
export const getMeThunk = createAsyncThunk('getMe', async (_, thunkAPI) => {
  // Перевірити токен, чи є він в локал сторейдж
  const savedToken = thunkAPI.getState().auth.token;
  // Якщо токена нема - зупинити операцію
  if (savedToken === null) {
    return thunkAPI.rejectWithValue('Token is not exist!');
  }
  console.log(savedToken);
  // Якщо є - продовжуємо
  try {
    // Встановлюємо токен в хедери
    setToken(savedToken);
    // Робимо запит до сервера
    const { data } = await goitApi.get('users/me');
    // Віддаємо відповідь
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
