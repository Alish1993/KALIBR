import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/authService';
import type { AuthStateType, UserSignInType, UserType } from '../../../types/authTypes';

export const checkUserThunk = createAsyncThunk<AuthStateType>('auth/checkUser', async () => {
  const data = await AuthService.check();
  return data;
});

export const signInThunk = createAsyncThunk<AuthStateType, UserSignInType>(
  'auth/signin',
  async (formData) => {
    const data = await AuthService.signIn(formData);
    return data;
  },
);

export const signOutThunk = createAsyncThunk('auth/signout', async () => {
  await AuthService.signOut();
  return undefined;
});

export const refreshTokenThunk = createAsyncThunk<AuthStateType>('auth/refreshToken', async () => {
  const data = AuthService.refresh();
  return data;
});

// multer

export const setAvatarThunk = createAsyncThunk<UserType>('auth/avatar', async (formData) => {
  const data = await AuthService.setAvatar(formData);
  return data;
});
