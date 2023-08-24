import { createAsyncThunk } from "@reduxjs/toolkit"

import { axiosInstance } from 'src/services/axiosConfig';
import { User } from "src/entities/User";

interface RootState {
  auth: {
    token: string;
  };
}

const token = {
  set(token:string | null):void {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset():void{
    axiosInstance.defaults.headers.common.Authorization = '';
  }
}

const register = createAsyncThunk('auth/register', async (userData: User, thunkApi) => {
  try{
    const {data} = await axiosInstance.post('/auth/register', userData)
    token.set(data.token)
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

const login = createAsyncThunk('auth/login', async (userData: User, thunkApi) => {
  try{
    const {data} = await axiosInstance.post('/auth/login', userData)
    token.set(data.token)
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try{
    await axiosInstance.post('/auth/logout')
    token.unset()
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

const refresh = createAsyncThunk('auth/current', async (_, thunkApi) => {
  const {auth} = thunkApi.getState() as RootState
  const persistedToken = auth.token

  if(!persistedToken){
    return thunkApi.rejectWithValue('Unable to fetch user');
  }

  try{
    token.set(persistedToken)
    const {data} = await axiosInstance.get('/auth/current')
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

export {login, logout, register, refresh}
