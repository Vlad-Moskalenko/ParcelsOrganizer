import { ParcelState } from "src/entities/ParcelState";
import { axiosInstance } from "./axiosConfig";
import { toast } from "react-toastify";

const getParcelsList = async () => {
  try {
    const resp = await axiosInstance.get('/parcels')
    return resp.data
  } catch (err) {
      toast.error(err.response.data.message);
  }
};

const getParcelById = async (id: string) => {
  try {
    const resp = await axiosInstance.get('/parcels', {params: {id}})
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const addOrder = async (data: ParcelState) => {
  try {
    const resp = await axiosInstance.post('/parcels/order', data)
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const addDeliver = async (data: ParcelState) => {
  try {
    const resp = await axiosInstance.post('/parcels/delive', data)
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const removeParcel = async (id:string) => {
  try {
    const resp = await axiosInstance.post('/parcels', {params: {id}})
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const updateParcel = async (id:string) => {
  try {
    const resp = await axiosInstance.post('/parcels', {params: {id}})
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export {getParcelsList, getParcelById, addOrder, addDeliver, updateParcel, removeParcel }