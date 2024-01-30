import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSliceReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  contacts: contactSliceReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
