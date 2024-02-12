import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { OrderFormType, OrderType } from '../types/orderType';

export const orderApiService = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/orders`,
  withCredentials: true,
});

class OrderService {
  static async getOrders(): Promise<OrderType[]> {
    const { data } = await orderApiService<OrderType[]>('/');
    return data;
  }

  static async createOrder(formData: OrderFormType): Promise<OrderType> {
    const { data } = await orderApiService.post<OrderType>('/', formData);
    return data;
  }

  static async deleteOrder(id: OrderType['id']): Promise<AxiosResponse> {
    return orderApiService.delete(`/${id}`);
  }

  static async editOrder(id: OrderType['id'], formData: OrderFormType): Promise<OrderType> {
    const {data} = await orderApiService.patch<OrderType>(`/${id}`, formData);
    return data
  }
}

export default OrderService;
