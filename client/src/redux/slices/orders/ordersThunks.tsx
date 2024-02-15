import { createAsyncThunk } from '@reduxjs/toolkit';
import OrderService from '../../../services/orderService';
import { setOrderFormData } from '../modals/modalsSlice';
import type { OrderFormType, OrderType } from '../../../types/orderType';

export const getOrdersThunk = createAsyncThunk<OrderType[]>('orders/getOrders', async () => {
  const data = await OrderService.getOrders();
  return data;
});
// рабочая версия
// export const addOrderThunk = createAsyncThunk<OrderType, OrderFormType>(
//   'orders/addOrder',
//   async (formData) => {
//     console.log(formData);
    
//     const data = await OrderService.createOrder(formData);
//     console.log(data);
    
//     return data;
//   },
// );
export const addOrderThunk = createAsyncThunk<OrderType, OrderFormType>(
  'orders/addOrder',
  async (dataToSend) => {
    try {
      const data = await OrderService.createOrder(dataToSend);
      return data;
    } catch (error) {
      console.error('Ошибка отправки данных заказа:', error);
      throw error; 
    }
  },
);

export const deleteOrderThunk = createAsyncThunk<OrderType['id'], OrderType['id']>(
  'orders/deleteOrder',
  async (id) => {
    await OrderService.deleteOrder(id);
    return id;
  },
);
