import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type OrderFormData = { name: string; phone: string; email: string; };//добавлено
type ModalsState = { toggleAvatarModal: boolean , toggleSignInModal: boolean, toggleOrderModal: boolean, orderFormData: OrderFormData | null;};//добавлено orderFormData: OrderFormData | null
const initialState: ModalsState = { toggleAvatarModal: false, toggleSignInModal: false, toggleOrderModal: false, orderFormData: null };//добавлено orderFormData: null

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setAvatarModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.toggleAvatarModal = action.payload;
    },
    setSignInModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.toggleSignInModal = action.payload;
    },
    setToggleOrderModal: (state, action: PayloadAction<boolean>) => {
      state.toggleOrderModal = action.payload;
    },
    //добавлено
    setOrderFormData: (state, action: PayloadAction<OrderFormData>) => {
      state.orderFormData = action.payload;
    },
  },
});

export const { setAvatarModalVisibility, setSignInModalVisibility, setToggleOrderModal, setOrderFormData } = modalsSlice.actions;//добавлено setOrderFormData


export default modalsSlice.reducer;
