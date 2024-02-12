import axios from 'axios';
import type { ServiceType } from '../types/serviceType';

export const serviceApiService = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/services`,
  withCredentials: true,
});

class ServiceSevice {
  static async getServices(): Promise<ServiceType[]> {
    const { data } = await serviceApiService<ServiceType[]>('/');
    return data;
  }

  static async getService(id: ServiceType['id']): Promise<ServiceType> {
    const { data } = await serviceApiService<ServiceType>(`/${id}`);
    return data;
  }
}

export default ServiceSevice;
