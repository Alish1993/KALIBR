import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OrderType } from '../../../types/orderType';
import { addOrderThunk, getOrdersThunk } from './ordersThunks';

type OrdersState = { order: OrderType[]; currenOrder: OrderType | null };
const initialState: OrdersState = { order: [], currenOrder: null };

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrdersThunk.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(getOrdersThunk.rejected, (state, action) => {
      state.order = [];
    });
    builder.addCase(addOrderThunk.fulfilled, (state, action) => {
      state.order = [...state.order, action.payload];
    });
    builder.addCase(addOrderThunk.rejected, (state, action) => state);
  },
});

export default ordersSlice.reducer;
