import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

import { axiosInstance } from "src/services/axiosConfig"
import { ParcelState } from "src/entities/ParcelState"

interface UpdatedData extends Partial<ParcelState> {
  updatedAt?: string;
  owner?: string;
}

type Error = {
  message: string;
};

export const getParcels = createAsyncThunk('parcels/getParcels', async(_, thunkApi) => {
  try{
    const {data} = await axiosInstance.get('/parcels')
    return data
  }
  catch(e){
    const err = e as AxiosError<Error>
    toast.error(err.response?.data.message)
    return thunkApi.rejectWithValue(e)
  }
})

export const deleteParcel = createAsyncThunk('parcels/deleteParcel', async(parcelId: string, thunkApi) => {
  try {
    const {data} = await axiosInstance.delete(`/parcels/${parcelId}`)
    return data
  }
  catch(e){
    const err = e as AxiosError<Error>
    toast.error(err.response?.data.message)
    return thunkApi.rejectWithValue(e)
  }
})

export const createParcel = createAsyncThunk(
  'parcels/createParcel',
  async(parcelData: Omit<ParcelState, '_id' | 'createdAt' >, thunkApi) => {
    try {
      const {data} = await axiosInstance.post('/parcels', {...parcelData})
      return data
    }
    catch(e){
      const err = e as AxiosError<Error>
      toast.error(err.response?.data.message)
      return thunkApi.rejectWithValue(e)
    }
})

export const editParcel = createAsyncThunk(
  'parcels/editParcel',
  async(parcelData: UpdatedData, thunkApi) => {
    try {
      // eslint-disable-next-line
      const {_id, owner, createdAt, updatedAt, ...updatedParcel} = parcelData;
      const {data} = await axiosInstance.put(`/parcels/${_id}`, updatedParcel)
      return data
    }
    catch(e){
      const err = e as AxiosError<Error>
      toast.error(err.response?.data.message)
      return thunkApi.rejectWithValue(e)
    }
})