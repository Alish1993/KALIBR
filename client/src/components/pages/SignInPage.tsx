import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { signInThunk } from '../../redux/slices/auth/authThunks';
import type { UserSignInType } from '../../types/authTypes';

export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  // TEST
  const user = useAppSelector((store) => store.auth.user);
  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    void dispatch(signInThunk(formData as UserSignInType));
  };

  return (
    <Container>
      <Grid
        container
        margin="auto"
        mt={10}
        direction="column"
        width={300}
        justifyContent="center"
        rowGap={2}
        alignItems="center"
        component="form"
        onSubmit={submitHandler}
      >
        <TextField variant="outlined" name="email" label="Email" type="email" />
        <TextField variant="outlined" name="password" label="Password" type="password" />
        <Button variant="outlined" type="submit">
          {user.status === 'logged' ? user.username : 'login'}
        </Button>
      </Grid>
    </Container>
  );
}
