export type UserType = {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  isAdmin: boolean;
};

export type UserSignInType = Omit<UserType, 'id' | 'isAdmin'>;

export type UserStateType =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'logged' } & UserType);

export type AuthStateType = {
  accessToken: string;
  user: UserType;
};

