import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {login, register, refresh, logout} from './authOperations'
import { User } from "src/entities/User";

export type AuthState = {
  user: User,
  token: string | null,
  isLoggedIn: boolean,
  isRefreshing: boolean
}

export const initialState: AuthState = {
  user: {
    name: null,
    email: null
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(login.fulfilled, (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(register.fulfilled, (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(logout.fulfilled, state =>{
      state.user = {
        name: null,
        email: null
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    })
    .addCase(refresh.fulfilled, (state, action: PayloadAction<User>) =>{
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addMatcher(
        action =>
          action.type.startsWith('/auth') &&
          action.type.endsWith.endsWith('/pending'),
        state => {
          state.isLoggedIn = false;
          state.isRefreshing = true;
        }
      )
    .addMatcher(
      action =>
        action.type.startsWith('/auth') && action.type.endsWith('/rejected'),
      state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      }
    )
})

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);