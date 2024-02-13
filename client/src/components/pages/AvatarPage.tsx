import { Button, CardMedia, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setAvatarThunk } from '../../redux/slices/auth/authThunks';

export default function AvatarPage(): JSX.Element {
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const selectedFiles = e.target.avatar.files as FileList;
    if (!selectedFiles[0]) return;
    const formData = new FormData();
    formData.append('file', selectedFiles[0]);
    e.target.reset();
    void dispatch(setAvatarThunk(formData));
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
        <TextField variant="outlined" name="avatar" label="avatar" type="file" />
        <Button variant="outlined" type="submit">
          Поменять аву
        </Button>
        {user.status}
        {/* {user.status === 'logged' && user.avatar !== null && ( */}
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="http://localhost:3001/img/1707742282418.webp"
            alt="Live from space album cover"
          />
        {/* )} */}
      </Grid>
    </Container>
  );
}
