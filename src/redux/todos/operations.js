import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../../config/goitApi';

export const fetchTodosThunk = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
  try {
    const { data } = await goitApi.get('tasks');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
  try {
    await goitApi.delete(`tasks/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
  try {
    const { data } = await goitApi.post('tasks', body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkAPI) => {
  try {
    const { data } = await goitApi.put(`tasks/${body.id}`, { ...body, completed: !body.completed });
    console.log(data);
    return body.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchTodosThunk = () => async dispatch => {
//   try {
//     dispatch(setLoadingStatus(true));
//     const response = await goitApi.get('todos');
//     console.log(response.data);
//     dispatch(fetchData(response.data));
//   } catch (error) {
//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };

// export const deleteTodoThunk = id => async dispatch => {
//   // try {
//   //   dispatch(setLoadingStatus(true));
//   //   await axios.delete(`todos/${id}`);
//   //   dispatch(deleteTodo(id));
//   // } catch (error) {
//   //   dispatch(setErrorStatus(true));
//   // } finally {
//   //   dispatch(setLoadingStatus(false));
//   // }
// };
