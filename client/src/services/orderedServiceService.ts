import axios from 'axios';
import type { OrderedServiceFormType, OrderedServiceType } from '../types/orderedServiceType';

export const orderedServiceApiService = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/orderedservices`,
  withCredentials: true,
});

class OrderedServiceSevice {
  static async getOrderedServices(
    id: OrderedServiceType['orderId'],
  ): Promise<OrderedServiceType[]> {
    const { data } = await orderedServiceApiService<OrderedServiceType[]>(`/${id}`);
    return data;
  }

  static async addOrderedServices(
    id: OrderedServiceType['orderId'],
    formDatas: OrderedServiceFormType[],
  ): Promise<OrderedServiceType[]> {
    const { data } = await orderedServiceApiService.post<OrderedServiceType[]>(
      `/${id}`,
      formDatas,
    );
    return data;
  }

  static async editOrderedServices(
    id: OrderedServiceType['orderId'],
    formDatas: OrderedServiceFormType[],
  ): Promise<OrderedServiceType[]> {
    const { data } = await orderedServiceApiService.patch<OrderedServiceType[]>(
      `/${id}`,
      formDatas,
    );
    return data;
  }
}

export default OrderedServiceSevice;
