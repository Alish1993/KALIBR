
import React from 'react';
import { Card, CardContent, CardActions, IconButton, Typography, CardMedia } from '@mui/material';
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
    <div style={{ display: 'inline-block', margin: '10px' }}> {/* Обертка для карточки с отступом */}
      <Card
        sx={{
          border: '1px solid #ccc',
          marginTop: 2,
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          transition: 'transform 0.2s ease',
          position: 'relative',
          width: 300, // Увеличиваем ширину карточки
          height: 400, // Увеличиваем высоту карточки
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
          image="https://steamuserimages-a.akamaihd.net/ugc/792004915773596517/97D410E7008CBDDB053AF8BD161B43669136EE3A/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
          alt="User Image"
          sx={{
            // padding: '122px',
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
    </div>
  );
}

