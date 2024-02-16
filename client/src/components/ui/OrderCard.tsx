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
              {order.email}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {order.phone}
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
