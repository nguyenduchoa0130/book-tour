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

  async createPayment(payload) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/_create`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getPaymentHistories(userId) {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getOne/${userId}`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }
}

export const paymentService = new PaymentService();
