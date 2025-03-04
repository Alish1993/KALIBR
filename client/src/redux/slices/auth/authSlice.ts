import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  checkUserThunk,
  createUserThunk,
  deleteUserThunk,
  getUsersThunk,
  refreshTokenThunk,
  setAvatarThunk,
  signInThunk,
  signOutThunk,
} from './authThunks';
import type { UserStateType, UserType } from '../../../types/authTypes';

export type UserState = { accessToken: string; user: UserStateType; users: UserType[] };
const initialState: UserState = { accessToken: '', user: { status: 'pending' }, users: [] };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(checkUserThunk.pending, (state, action) => {
      state.accessToken = '';
      state.user = { status: 'pending' };
    });
    builder.addCase(checkUserThunk.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'logged' };
    });
    builder.addCase(checkUserThunk.rejected, (state, action) => {
      state.accessToken = '';
      state.user = { status: 'guest' };
    });
    builder.addCase(refreshTokenThunk.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'logged' };
    });
    builder.addCase(refreshTokenThunk.rejected, (state, action) => {
      state.accessToken = '';
      state.user = { status: 'guest' };
    });
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'logged' };
    });
    builder.addCase(signInThunk.rejected, (state, action) => {
      state.accessToken = '';
      state.user = { status: 'guest' };
    });
    builder.addCase(signOutThunk.fulfilled, (state, action) => {
      state.accessToken = '';
      state.user = { status: 'guest' };
    });
    builder.addCase(signOutThunk.rejected, (state, action) => state);

    // multer

    builder.addCase(setAvatarThunk.fulfilled, (state, action) => {
      if (state.user.status === 'logged')
        state.user = { ...state.user, avatar: action.payload.avatar };
      // Что будет если иф не сработает?
    });
    builder.addCase(setAvatarThunk.rejected, (state, action) => state);

    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getUsersThunk.rejected, (state, action) => state);
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(deleteUserThunk.rejected, (state, action) => state);

    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      state.users = [action.payload, ...state.users];
    });
    builder.addCase(createUserThunk.rejected, (state, action) => state);
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
