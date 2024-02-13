import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ModalsState = { toggleAvatarModal: boolean , toggleSignInModal: boolean};
const initialState: ModalsState = { toggleAvatarModal: false, toggleSignInModal: false };

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
  },
});

export const { setAvatarModalVisibility, setSignInModalVisibility } = modalsSlice.actions;

export default modalsSlice.reducer;
