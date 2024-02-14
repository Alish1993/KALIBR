import React from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setToggleCreateUserModalVisibilit } from '../../redux/slices/modals/modalsSlice';

export default function CreateUserModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const toggleCreateUserModal = useAppSelector((store) => store.modals.toggleCreateUserModal);

  const handleClose = (): void => {
    dispatch(setToggleCreateUserModalVisibilit(false));
  };

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    // void dispatch(signInThunk(formData as UserSignInType));
    dispatch(setToggleCreateUserModalVisibilit(false));
  };

  return (
    <Dialog
      open={toggleCreateUserModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Create User</DialogTitle>
      <DialogContent>
        <Box
          py={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          component="form"
          onSubmit={submitHandler}
        >
                    <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="name"
              type="text"
              style={{ textAlign: 'center', borderRadius: '50px', marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              style={{ textAlign: 'center', borderRadius: '50px', marginBottom: '10px' }}
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

          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
            Create
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
