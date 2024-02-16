import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OrderType } from '../../../types/orderType';
import { addOrderThunk, deleteOrderThunk, editOrderThunk, getOrdersThunk } from './ordersThunks';

type OrdersState = { orders: OrderType[]; currentOrder: OrderType | null };
const initialState: OrdersState = { orders: [], currentOrder: null };

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCurrentOrder: (state, action: PayloadAction<OrderType | null>) => {
      state.currentOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersThunk.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
    builder.addCase(getOrdersThunk.rejected, (state, action) => state);
    builder.addCase(deleteOrderThunk.fulfilled, (state, action) => {
      state.orders = state.orders.filter((order) => order.id !== action.payload);
    });
    builder.addCase(deleteOrderThunk.rejected, (state, action) => state);
    builder.addCase(addOrderThunk.fulfilled, (state, action) => {
      state.orders = [...state.orders, action.payload];
    });
    builder.addCase(addOrderThunk.rejected, (state, action) => state);
    builder.addCase(editOrderThunk.fulfilled, (state, action) => {
      state.orders = state.orders.map((order) =>
        order.id === action.payload.id ? action.payload : order,
      );
    });
    builder.addCase(editOrderThunk.rejected, (state, action) => state);
  },
});

export const { setCurrentOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
