import React, { useEffect } from 'react';
import { Button, List } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUsersThunk } from '../../redux/slices/auth/authThunks';
import UserCard from '../ui/UserCard';
import { setToggleCreateUserModalVisibilit } from '../../redux/slices/modals/modalsSlice';

export default function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.auth.users);
  useEffect(() => {
    void dispatch(getUsersThunk());
  }, []);

  return (
    <>
    <Button onClick={() => {void dispatch(setToggleCreateUserModalVisibilit(true))}}>ADD</Button>
    <List
      sx={{
        width: '100%',
        maxWidth: 560,
        bgcolor: 'background.paper',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </List>
    </>
  );
}
