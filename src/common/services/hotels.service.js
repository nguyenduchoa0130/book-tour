import BaseService from './base.service';

class HotelsService extends BaseService {
  constructor() {
    super('/api/hotels');
  }
}

export const hotelService = new HotelsService();
