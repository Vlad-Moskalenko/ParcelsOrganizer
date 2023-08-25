import { ParcelState } from "src/entities/ParcelState";
import { axiosInstance } from "./axiosConfig";
import { toast } from "react-toastify";

type UpdateParcel = {
  id: string;
  data: Partial<ParcelState>;
}

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
    const resp = await axiosInstance.get(`/parcels/${id}`)
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
    const resp = await axiosInstance.post('/parcels/deliver', data)
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const removeParcel = async (id:string) => {
  try {
    const resp = await axiosInstance.delete(`/parcels/${id}`)
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const updateOrder = async ({id, data}: UpdateParcel) => {
  try {
    const resp = await axiosInstance.put(`/parcels/order/${id}`, data)
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

const updateDeliver = async ({id, data}: UpdateParcel) => {
  try {
    const resp = await axiosInstance.put(`/parcels/deliver/${id}`, data)
    return resp.data
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export {getParcelsList, getParcelById, addOrder, addDeliver, updateOrder, updateDeliver, removeParcel }