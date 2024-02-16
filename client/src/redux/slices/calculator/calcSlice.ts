import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {  CalculatorTypeNoId } from '../../../types/calculatorType';

type ServiceState = {
  services: Partial<CalculatorTypeNoId>;
}

const initialState: ServiceState = {
  services: {},
};

const calcSlice = createSlice({
  name: 'loaderPackAuto',
  initialState,
  reducers: {
    formServiceObject: (state, action: PayloadAction<CalculatorTypeNoId>) => {
        state.services = {...state.services, ...action.payload};
    },
  },
});

export default calcSlice.reducer;
export const { formServiceObject } = calcSlice.actions;
