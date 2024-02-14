import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ModalsState = { toggleAvatarModal: boolean , toggleSignInModal: boolean, toggleOrderModal: boolean, toggleCreateUserModal: boolean};
const initialState: ModalsState = { toggleAvatarModal: false, toggleSignInModal: false, toggleOrderModal: false, toggleCreateUserModal: false };

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
    setToggleCreateUserModalVisibilit: (state, action: PayloadAction<boolean>) => {
      state.toggleCreateUserModal = action.payload;
    }
  },
});

export const { setAvatarModalVisibility, setSignInModalVisibility, setToggleOrderModal, setToggleCreateUserModalVisibilit} = modalsSlice.actions;


export default modalsSlice.reducer;
