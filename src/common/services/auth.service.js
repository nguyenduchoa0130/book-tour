import BaseService from './base.service';

class AuthService extends BaseService {
  constructor() {
    super('/auth');
  }

  async signIn(payload) {
    try {
      const { data } = await this.axiosClient.post(`${ this._path }/sign-in`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async signUp(payload) {
    try {
      const { data } = await this.axiosClient.post(`${ this._path }/sign-up`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
