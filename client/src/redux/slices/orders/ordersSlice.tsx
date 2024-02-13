import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OrderType } from '../../../types/orderType';
import { deleteOrderThunk, getOrdersThunk } from './ordersThunks';

type OrdersState = OrderType[];
const initialState: OrdersState = [];

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrdersThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getOrdersThunk.rejected, (state, action) => state);
    builder.addCase(deleteOrderThunk.fulfilled, (state, action) =>
      state.filter((order) => order.id !== action.payload),
    );
    builder.addCase(deleteOrderThunk.rejected, (state, action) => state);
  },
});

export default ordersSlice.reducer;
