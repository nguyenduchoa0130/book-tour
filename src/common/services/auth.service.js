import axiosClient from '../utils/axios-client.util';

class AuthService {
  constructor() {
    this._path = '/auth';
  }
  async signIn(payload) {
    try {
      const { data } = await axiosClient.post(`${this._path}/sign-in`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async signUp(payload) {
    try {
      const { data } = await axiosClient.post(`${this._path}/sign-up`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
