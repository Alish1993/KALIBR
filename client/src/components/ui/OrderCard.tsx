import { IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import type { OrderType } from '../../types/orderType';
import { useAppDispatch } from '../../redux/hooks';
import { deleteOrderThunk } from '../../redux/slices/orders/ordersThunks';

type OrderCardProperties = {
  order: OrderType;
};

export default function OrderCard({ order }: OrderCardProperties): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => void dispatch(deleteOrderThunk(order.id))}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={order.name}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {order.email}
            </Typography>
            <br />
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {order.phone}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}
