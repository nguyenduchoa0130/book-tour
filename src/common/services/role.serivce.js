import BaseService from './base.service';

class RoleService extends BaseService {
  constructor() {
    super('/roles');
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

const roleService = new RoleService();
export default roleService;
