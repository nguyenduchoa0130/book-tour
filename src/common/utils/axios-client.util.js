import axios from 'axios';
import AlertUtil from './alert.util';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const message = err.response.data.message || err.message;
    if (err.response.status === 401) {
      localStorage.setItem('persist:root', JSON.stringify({}));
      setTimeout(() => {
        window.location.href = window.location.origin + '/dang-nhap';
      }, 100);
    }
    AlertUtil.showError(message);
    return Promise.reject(err);
  },
);

export default axiosClient;
