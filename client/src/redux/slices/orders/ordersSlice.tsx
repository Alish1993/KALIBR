import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OrderType } from '../../../types/orderType';
import { addOrderThunk, deleteOrderThunk, getOrdersThunk } from './ordersThunks';

type OrdersState = { orders: OrderType[]; currenOrder: OrderType | null };
const initialState: OrdersState = { orders: [], currenOrder: null };

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrdersThunk.fulfilled, (state, action) => {state.orders = action.payload});
    builder.addCase(getOrdersThunk.rejected, (state, action) => state);
    builder.addCase(deleteOrderThunk.fulfilled, (state, action) =>
      {state.orders = state.orders.filter((order) => order.id !== action.payload)}
    );
    builder.addCase(deleteOrderThunk.rejected, (state, action) => state);
    builder.addCase(addOrderThunk.fulfilled, (state, action) => {
      state.orders = [...state.orders, action.payload];
    });
    builder.addCase(addOrderThunk.rejected, (state, action) => state);
  },
});

export default ordersSlice.reducer;
