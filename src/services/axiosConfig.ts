import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://gotoinc-parcels.onrender.com',
});
