import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from 'axiosConfig/api';

export const userRegister = createAsyncThunk(
  'users/registerUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', user);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {}
  }
);
