import React from 'react';

import TextField from '@mui/material/TextField';
import { Button, Dialog } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setToggleOrderModal } from '../../redux/slices/modals/modalsSlice';

export default function OrderModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const modalUser = useAppSelector((state) => state.modals.toggleOrderModal);

  const handleClose = (): void => {
    dispatch(setToggleOrderModal(false));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setToggleOrderModal(false));
  };

  return (
    <Dialog
      open={modalUser}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form
        onSubmit={submitHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
        }}
      >
        <TextField label="Name" id="margin-none" type="text" />
        <TextField label="Phone" id="margin-dense" margin="dense" type="tel" />
        <TextField label="Email" id="margin-normal" margin="normal" type="email" />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
        <Button onClick={handleClose} variant="contained" color="secondary" autoFocus>
          Close
        </Button>
      </form>
    </Dialog>
  );
}
