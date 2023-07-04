import axiosClient from '../utils/axios-client.util';

class TourService {
  constructor() {
    this._path = '/tours';
  }

  async create(payload) {
    try {
      const { data } = await axiosClient.post(`${this._path}/_create`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(tourId, payload) {
    try {
      const { data } = await axiosClient.patch(`${this._path}/_update/${tourId}`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(tourId) {
    try {
      const { data } = await axiosClient.delete(`${this._path}/_delete/${tourId}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
export default new TourService();
