import axios, { InternalAxiosRequestConfig } from "axios";
import { VITE_API_URL, VITE_KEY_TOKEN } from "../utils/constants";

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const _token = localStorage.getItem(VITE_KEY_TOKEN);
    config.headers.Accept = "application/json";
    if (_token) {
      config.headers.Authorization = `Bearer ${_token}`;
    }
    console.log(config.headers)
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   const access_token = await refreshAccessToken();
      //   axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      //   return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
