export type UserType = {
  id: number;
  username: string;
  email: string;
  avatar?: string;
};

export type UserSignInType = Omit<UserType, 'id'>;

export type UserStateType =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'logged' } & UserType);

export type AuthStateType = {
  accessToken: string;
  user: UserType;
};
