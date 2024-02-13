import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { signInThunk } from '../../redux/slices/auth/authThunks';
import type { UserSignInType } from '../../types/authTypes';

export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    void dispatch(signInThunk(formData as UserSignInType));
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        justifyContent="center"
        // alignItems="center"
        spacing={2}
        component="form"
        onSubmit={submitHandler}
        sx={{ marginTop: '5rem' }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Sign In
          </Typography>
        </Grid>

        {user.status === 'logged' && (user.avatar)}
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            style={{ textAlign: 'center', borderRadius: '50px', marginBottom: '10px' ,}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            style={{ textAlign: 'center', borderRadius: '50px', marginBottom: '10px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" type="submit" color="primary"  style={{ textAlign: 'center', borderRadius: '50px', marginBottom: '100px' }}>
            {user.status === 'logged' ? `Welcome, ${user.username}` : 'Login'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
