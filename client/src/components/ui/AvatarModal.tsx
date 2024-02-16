import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setAvatarModalVisibility } from '../../redux/slices/modals/modalsSlice';
import { setAvatarThunk } from '../../redux/slices/auth/authThunks';

export default function AvatarModal(): JSX.Element {
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();
  const toggleAvatarModal = useAppSelector((store) => store.modals.toggleAvatarModal);

  const handleClose = (): void => {
    dispatch(setAvatarModalVisibility(false));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!user) {
      dispatch(setAvatarModalVisibility(false));
      return;
    }
    const selectedFiles = e.target.avatar.files as FileList;
    if (!selectedFiles[0]) {
      dispatch(setAvatarModalVisibility(false));
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFiles[0]);
    e.target.reset();
    void dispatch(setAvatarThunk(formData));

    dispatch(setAvatarModalVisibility(false));
  };

  return (
    <Dialog
      open={toggleAvatarModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Change avatar</DialogTitle>
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
          <TextField
            variant="outlined"
            name="avatar"
            label="Avatar"
            type="file"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
            Send
          </Button>
          <Typography variant="caption" color="textSecondary" style={{ marginTop: '10px' }}>
            * Only .jpg, .png files are supported
          </Typography>
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
