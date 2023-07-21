import BaseService from './base.service';

class ToursService extends BaseService {
  constructor() {
    super('/api/tours');
  }

  async getTours(keyword = '', startDate = '', place = '') {
    try {
      const query = [];
      if (keyword.trim()) {
        query.push(`keyword=${keyword.trim()}`);
      }
      if (startDate) {
        const date = new Date(startDate).toLocaleDateString();
        query.push(`startDate=${date}`);
      }
      if (place) {
        query.push(`place=${place}`);
      }
      const url = `${this.path}/_getAll` + (query.length ? `?${query.join('&')}` : '');
      const { data } = await this.axiosClient.get(url);
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
      const { data } = await this.axiosClient.post(`${this.path}/_create`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
