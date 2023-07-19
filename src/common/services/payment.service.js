import BaseService from './base.service';

class PaymentService extends BaseService {
  constructor() {
    super('/api/payment');
  }

  async setUpPaymentIntent(amount) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/_payment_intents`, { amount });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const paymentService = new PaymentService();
