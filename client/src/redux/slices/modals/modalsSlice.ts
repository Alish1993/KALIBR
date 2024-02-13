import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ModalsState = { toggleAvatarModal: boolean; toggleOrderModal: boolean };
const initialState: ModalsState = { toggleAvatarModal: false, toggleOrderModal: false };

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setAvatarModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.toggleAvatarModal = action.payload;
    },
    setToggleOrderModal: (state, action: PayloadAction<boolean>) => {
      state.toggleOrderModal = action.payload;
    },
  },
});

export const { setAvatarModalVisibility, setToggleOrderModal } = modalsSlice.actions;

export default modalsSlice.reducer;
