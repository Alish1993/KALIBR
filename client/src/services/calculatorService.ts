import axios from 'axios';
import type { CalculatorTypeNoId } from '../types/calculatorType';

export const calculatorApiService = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/services`,
  withCredentials: true,
});

class CalculatorService {
  static async createServiceFromCalculator(formData: CalculatorTypeNoId): Promise<CalculatorTypeNoId> {
    const { data } = await calculatorApiService.post<CalculatorTypeNoId>('/', formData);
    return data;
  }
}

export default CalculatorService;