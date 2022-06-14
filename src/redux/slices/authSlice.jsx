import { createSlice } from '@reduxjs/toolkit';
import {API} from '../../services/api'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    message_login: "",
  },
  reducers: {
    attemptLogin: (state, action) => {
        state.isLoggedIn = false
        state.isLoggingIn = true
    },
    loginSuccess: (state, action) => {
        state.isLoggedIn = true
        state.isLoggingIn = false
        state.message = action.payload.message ? action.payload.message : "Login Successful" 
    },
    loginFailed: (state, action) => {
        state.isLoggedIn = false
        state.isLoggingIn = false
        state.message = action.payload.message ? action.payload.message : "Login Failed" 
    },
  },
});

export const { 
    attemptLogin, 
    loginSuccess, 
    loginFailed 
} = authSlice.actions;

export default authSlice.reducer;
