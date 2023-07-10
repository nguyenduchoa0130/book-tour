import BaseService from './base.service';

class RoleService extends BaseService {
  constructor() {
    super('/roles');
  }

  async getRoles() {
    try {
      const roles = await this.axiosClient.get(`${ this.path }`);
      return roles;
    } catch (error) {
      throw error;
    }
  }
}

const roleService = new RoleService();
export default roleService;