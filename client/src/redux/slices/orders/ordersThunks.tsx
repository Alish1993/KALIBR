import { createAsyncThunk } from '@reduxjs/toolkit';
import OrderService from '../../../services/orderService';
import type { OrderType } from '../../../types/orderType';

export const getOrdersThunk = createAsyncThunk<OrderType[]>('orders/getOrders', async () => {
  const data = await OrderService.getOrders();
  return data;
});

export const a = 1;
