import { createAsyncThunk } from '@reduxjs/toolkit';
import OrderService from '../../../services/orderService';
import type { OrderFormType, OrderType } from '../../../types/orderType';

export const getOrdersThunk = createAsyncThunk<OrderType[]>('orders/getOrders', async () => {
  const data = await OrderService.getOrders();
  return data;
});
export const addOrderThunk = createAsyncThunk<OrderType, OrderFormType>(
  'orders/addOrder',
  async (formData) => {
    console.log(formData);
    
    const data = await OrderService.createOrder(formData);
    console.log(data);
    
    return data;
  },
);

export const a = 1;
