import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});


export default axiosInstance;

