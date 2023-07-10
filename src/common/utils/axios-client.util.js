import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL
});

axiosClient.interceptors.response.use((res) => {
  console.log(res);
  return res;
});

export default axiosClient;
