import BaseService from './base.service';

class AuthService extends BaseService {
  constructor() {
    super('/api/auth');
  }

  async signIn(payload) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/sign-in`, payload);
      return data.value;
    } catch (error) {
      throw error;
    }
  }

  async signUp(payload) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/sign-up`, payload);
      return data.value;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
