import { ParcelState } from "src/entities/ParcelState";
import { axiosInstance } from "./axiosConfig";

const getParcelsList = async () => {
  try {
    const resp = await axiosInstance.get('/parcels')
    return resp.data
  } catch (err) {
    console.log(err);
  }
};

const getParcelById = async (id: string) => {
  try {
    const resp = await axiosInstance.get('/parcels', {params: {id}})
    return resp.data
  } catch (err) {
    console.log(err);
  }
};

const addParcel = async (data: ParcelState) => {
  try {
    const resp = await axiosInstance.post('/parcels', data)
    return resp.data
  } catch (err) {
    console.log(err);
  }
};

const removeParcel = async (id:string) => {
  try {
    const resp = await axiosInstance.post('/parcels', {params: {id}})
    return resp.data
  } catch (err) {
    console.log(err);
  }
};

const updateParcel = async (id:string) => {
  try {
    const resp = await axiosInstance.post('/parcels', {params: {id}})
    return resp.data
  } catch (err) {
    console.log(err);
  }
};

export {getParcelsList, getParcelById, addParcel, updateParcel, removeParcel }