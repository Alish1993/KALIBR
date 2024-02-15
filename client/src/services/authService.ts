import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { AuthStateType, UserSignInType, UserType } from '../types/authTypes';

const authApiService = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  withCredentials: true,
});

class AuthService {
  static async refresh(): Promise<AuthStateType> {
    const { data } = await authApiService<AuthStateType>('/tokens/refresh');
    return data;
  }

  static async check(): Promise<AuthStateType> {
    const { data } = await authApiService<AuthStateType>('/auth/check');
    return data;
  }

  static async signIn(formData: UserSignInType): Promise<AuthStateType> {
    const { data } = await authApiService.post<AuthStateType>('/auth/signin', formData);
    return data;
  }

  static async signOut(): Promise<AxiosResponse> {
    return authApiService('/auth/signout');
  }

  // multer

  static async setAvatar(formData): Promise<UserType> {
    const { data } = await authApiService.patch<UserType>('/auth/avatar', formData);
    return data;
  }

  static async getUsers(): Promise<UserType[]> {
    const { data } = await authApiService<UserType[]>('/auth');
    return data;
  }

  static async deleteUser(id: UserType['id']): Promise<AxiosResponse> {
    return authApiService.delete(`/auth/${id}`);
  }

  static async createUser(formData: UserSignInType): Promise<UserType> {
    const { data } = await authApiService.post<UserType>('/auth', formData);
    return data;
  }
}

export default AuthService;
