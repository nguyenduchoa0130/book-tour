import BaseService from './base.service';

class UsersService extends BaseService {
  constructor() {
    super('/api/users');
  }

  async getUsers() {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getAll`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }

  async createUser(payload) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/_create`, payload);
      return data.value;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId, payload) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/_update/${userId}`, payload);
      return data.value;
    } catch (error) {
      throw error;
    }
  }

  async getTourGuides() {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getTourGuides`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }
}

export const userServices = new UsersService();
