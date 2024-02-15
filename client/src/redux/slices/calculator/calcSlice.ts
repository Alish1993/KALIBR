import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {  CalculatorTypeNoId } from '../../../types/calculatorType';

// type ServiceState = { services: CalculatorTypeNoId; };
// const initialState: ServiceState = { services: {
//     amountMachine: 0,
//     machine: '',
//     time: 0,
//     path: 0,
//     amountLoader: 0,
//     workTime: 0,
//     box: 0,
//     roll: 0,
//     scotch: 0,
//     stretchRoll: 0,
// }, };

// interface ServiceState {
//   services: Partial<CalculatorTypeNoId>; // Используйте Partial, чтобы все поля были необязательными
// }

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
