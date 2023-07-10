import axiosClient from '../utils/axios-client.util';

export default class BaseService {
  constructor(path) {
    this.path = path;
    this.axiosClient = axiosClient;
  }
}