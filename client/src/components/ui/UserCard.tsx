import { IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../redux/hooks';
import type { UserType } from '../../types/authTypes';
import { deleteUserThunk } from '../../redux/slices/auth/authThunks';

type UserCardProperties = {
  user: UserType;
};

export default function UserCard({ user }: UserCardProperties): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ListItem
      alignItems="flex-start"
      sx={{ border: '1px solid #ccc', marginTop: 2 }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => void dispatch(deleteUserThunk(user.id))}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={user.username}
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {user.email}
          </Typography>
        }
      />
    </ListItem>
  );
}
