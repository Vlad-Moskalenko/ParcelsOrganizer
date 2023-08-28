import { axiosInstance } from "src/services/axiosConfig"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { ParcelState } from "src/entities/ParcelState"

interface UpdatedData extends Partial<ParcelState> {
  updatedAt?: string;
  owner?: string;
}

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
  async(parcelData: UpdatedData, thunkApi) => {
    try {
      // eslint-disable-next-line
      const {_id, owner, createdAt, updatedAt, ...updatedParcel} = parcelData;
      const {data} = await axiosInstance.put(`/parcels/${_id}`, updatedParcel)
      return data
    }
    catch(e){
      return thunkApi.rejectWithValue(e)
    }
})