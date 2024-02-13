import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ModalsState = { toggleAvatarModal: boolean };
const initialState: ModalsState = { toggleAvatarModal: false };

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setAvatarModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.toggleAvatarModal = action.payload;
    },
  },
});

export const { setAvatarModalVisibility } = modalsSlice.actions;

export default modalsSlice.reducer;
