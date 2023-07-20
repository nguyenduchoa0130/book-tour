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

  async getBookingTour(requestType) {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getAll/${requestType}`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }

  async updatePayment(paymentId, payload) {
    try {
      const { data } = await this.axiosClient.patch(`${this.path}/_update/${paymentId}`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAssignedTours(userId) {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/_getAssignedTours/${userId}`);
      return data.value;
    } catch (error) {
      throw error;
    }
  }
}

export const paymentService = new PaymentService();
