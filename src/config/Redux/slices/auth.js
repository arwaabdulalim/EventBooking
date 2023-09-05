import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    authError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.errorMessage = action.payload.message;
    },
    clearError: state => {
      state.error = null;
      state.errorMessage = '';
    },
    setAuthErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setLoading,
  signupSuccess,
  loginSuccess,
  authError,
  clearError,
  setAuthErrorMessage,
} = authSlice.actions;

export const signup = formData => async dispatch => {
  try {
    dispatch(setLoading(true));
  } catch (error) {}
};
export const login = formData => async dispatch => {
  try {
    dispatch(loginSuccess(formData));
  } catch (error) {}
};

export default authSlice.reducer;
