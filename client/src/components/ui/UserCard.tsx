import React from 'react';
import { Card, CardContent, CardActions, IconButton, Typography, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../redux/hooks';
import type { UserType } from '../../types/authTypes';
import { deleteUserThunk } from '../../redux/slices/auth/authThunks';

type UserCardProperties = {
  user: UserType;
};

const photos = [
  '599-vviXvH6h-00822.gif',
  '1578962459_VelvetyVibrantEland-size_restricted.gif',
  '1520040242_1465996922037.gif',
  'CTmm.gif',
  'cbc96587889683.5dc57c28bbc2c.gif',
];

export default function UserCard({ user }: UserCardProperties): JSX.Element {
  const dispatch = useAppDispatch();

  const randomIndex = Math.floor(Math.random() * photos.length);
  const randomPhoto = photos[randomIndex];

  return (
    <Card
      sx={{
        border: '1px solid #ccc',
        marginTop: 2,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        transition: 'transform 0.2s ease',
        position: 'relative',
        width: 600,
        height: 300,
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardContent sx={{ '&:hover': { color: '#fff' } }}>
        <Typography variant="h5" component="div" className="user-name">
          {user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="user-email">
          {user.email}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="140"
        src={randomPhoto}
        alt="User Image"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <CardActions>
        <IconButton aria-label="delete" onClick={() => void dispatch(deleteUserThunk(user.id))}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
