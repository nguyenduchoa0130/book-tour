import BaseService from './base.service';

class TourService extends BaseService {
  constructor() {
    super('/tours');
  }

  async create(payload) {
    try {
      const { data } = await this.axiosClient.post(`${ this._path }/_create`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(tourId, payload) {
    try {
      const { data } = await this.axiosClient.patch(`${ this._path }/_update/${ tourId }`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(tourId) {
    try {
      const { data } = await this.axiosClient.delete(`${ this._path }/_delete/${ tourId }`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const tourService = new TourService();
export default tourService;
