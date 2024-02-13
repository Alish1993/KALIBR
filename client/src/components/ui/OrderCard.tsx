import { ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import type { OrderType } from '../../types/orderType';

type OrderCardProperties = {
  order: OrderType;
};

export default function OrderCard({ order }: OrderCardProperties): JSX.Element {
  return (
    <ListItem alignItems="flex-start">
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
