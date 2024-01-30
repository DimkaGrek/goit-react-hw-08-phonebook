import { createSlice } from '@reduxjs/toolkit';
import { userRegister } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectIsRefresh: state => state.isRefresh,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
    selectUser: state => state.user,
    selectIsError: state => state.error,
  },
  extraReducers: builder => {
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
export const {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
  selectIsError,
  selectIsRefresh,
} = authSlice.selectors;
