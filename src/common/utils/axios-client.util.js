import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err?.response?.status === 401) {
      localStorage.setItem('persist:root', JSON.stringify({}));
      setTimeout(() => {
        window.location.href = window.location.origin + '/dang-nhap';
      }, 100);
    }
    return Promise.reject(err);
  },
);

export default axiosClient;
