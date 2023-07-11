import BaseService from './base.service';

class ToursService extends BaseService {
  constructor() {
    super('/api/tours');
  }

  async getTours() {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getAll`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }

  async getTour(tourId) {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getOne/${tourId}`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }

  async create(payload) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/_create`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(tourId, payload) {
    try {
      const { data } = await this.axiosClient.patch(`${this.path}/_update/${tourId}`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(tourId) {
    try {
      const { data } = await this.axiosClient.delete(`${this.path}/_delete/${tourId}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const tourService = new ToursService();
