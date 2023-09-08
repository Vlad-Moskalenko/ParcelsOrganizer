import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://parcels-organizer.onrender.com',
});
