import { axiosInstance } from "src/services/axiosConfig"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { ParcelState } from "src/entities/ParcelState"

export const getParcels = createAsyncThunk('parcels/getParcels', async(_, thunkApi) => {
  try{
    const {data} = await axiosInstance.get('/parcels')
    return data
  }
  catch(e){
    return thunkApi.rejectWithValue(e)
  }
})

export const deleteParcel = createAsyncThunk('parcels/deleteParcel', async(parcelId: string, thunkApi) => {
  try {
    const {data} = await axiosInstance.delete(`/parcels/${parcelId}`)
    return data
  }
  catch(e){
    return thunkApi.rejectWithValue(e)
  }
})

export const createParcel = createAsyncThunk(
  '/parcels/createParcel',
  async(parcelData: Omit<ParcelState, '_id' | 'createdAt' >, thunkApi) => {
    try {
      const {data} = await axiosInstance.post('/parcels', {...parcelData})
      return data
    }
    catch(e){
      return thunkApi.rejectWithValue(e)
    }
})

export const editParcel = createAsyncThunk(
  '/parcels/editParcel',
  async(parcelData: ParcelState, thunkApi) => {
    try {
      const {data} = await axiosInstance.put('/parcels', {...parcelData})
      return data
    }
    catch(e){
      return thunkApi.rejectWithValue(e)
    }
})