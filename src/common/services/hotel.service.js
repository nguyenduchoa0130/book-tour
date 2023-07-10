import BaseService from './base.service';

class HotelService extends BaseService {
  constructor() {
    super('/hotels');
  }
}

const hotelService = new HotelService();
export default hotelService;