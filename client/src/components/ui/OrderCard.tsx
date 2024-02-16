import { IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import type { OrderType } from '../../types/orderType';
import { useAppDispatch } from '../../redux/hooks';
import { deleteOrderThunk } from '../../redux/slices/orders/ordersThunks';

type OrderCardProperties = {
  order: OrderType;
};

export default function OrderCard({ order }: OrderCardProperties): JSX.Element {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = () => {
    dispatch(deleteOrderThunk(order.id));
  };

  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginTop: 2,
        transition: 'transform 0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ListItemText
        primary={<Typography variant="h6">{order.name}</Typography>}
        secondary={
          <>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              почта {order.email}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              телефон {order.phone}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.amountMachine
                ? `количество машин ${order?.Services?.at(0)?.amountMachine}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.machine
                ? `тип машины ${order?.Services?.at(0)?.machine}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.time
                ? `время работы машины ${order?.Services?.at(0)?.time}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.path
                ? `расстояние от МКАД ${order?.Services?.at(0)?.path}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.workTime
                ? `время работы грузчиков ${order?.Services?.at(0)?.workTime}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.box
                ? `количество коробки ${order?.Services?.at(0)?.box}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.roll
                ? `количество рулонов оберточной пленки ${order?.Services?.at(0)?.roll}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.scotch
                ? `количество скотча ${order?.Services?.at(0)?.scotch}`
                : null}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order?.Services?.at(0)?.stretchRoll
                ? `количество рулонов стрйч-пленки ${order?.Services?.at(0)?.stretchRoll}`
                : null}
            </Typography>
          </>
        }
      />
      <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
