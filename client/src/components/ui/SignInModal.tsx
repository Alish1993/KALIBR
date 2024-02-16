import React from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Grid,
  TextField} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSignInModalVisibility } from '../../redux/slices/modals/modalsSlice';
import { signInThunk } from '../../redux/slices/auth/authThunks';
import type { UserSignInType } from '../../types/authTypes';

export default function SignInModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const toggleSignInModal = useAppSelector((store) => store.modals.toggleSignInModal);

  const handleClose = (): void => {
    dispatch(setSignInModalVisibility(false));
  };
  // const navigate = useNavigate();

  // return (
  //   <Card sx={{
  //     maxWidth: 400,
  //     m: 2,
  //     boxShadow: 3,
  //     borderRadius: '10px',
  //     border: '2px solid #5d001e', // Цветная рамка
  //     backgroundColor: '#ffffff', // Белый фон карточки
  //   }}>
  //     <CardActionArea onClick={() => navigate(`/groups/${group.id}`)}>
  //     <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', mb: 0, mt: 1 }}>
  //           {group.name} {/* Выравнивание названия по центру */}
  //         </Typography>


  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    void dispatch(signInThunk(formData as UserSignInType));
    dispatch(setSignInModalVisibility(false));
  };

  return (
    <Dialog
      open={toggleSignInModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
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
            Войти
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}
