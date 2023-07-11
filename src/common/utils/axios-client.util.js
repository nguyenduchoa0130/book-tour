import axios from 'axios';
import AlertUtil from './alert.util';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const message = err.response.data.message || err.message;
    AlertUtil.showError(message);
    return Promise.reject(err);
  },
);

export default axiosClient;
