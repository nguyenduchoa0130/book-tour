import BaseService from './base.service';

class RolesService extends BaseService {
  constructor() {
    super('/api/roles');
  }

  async getRoles() {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getAll`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }
}

export const roleService = new RolesService();
