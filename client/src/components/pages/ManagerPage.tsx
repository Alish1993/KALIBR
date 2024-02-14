import * as React from 'react';
import List from '@mui/material/List';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getOrdersThunk } from '../../redux/slices/orders/ordersThunks';
import OrderCard from '../ui/OrderCard';

export default function ManagerPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((store) => store.orders.orders);
  useEffect(() => {
    void dispatch(getOrdersThunk());
  }, []);
  return (
<List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper', margin: 'auto', textAlign: 'center' }}>
  {orders.map((order) => (
    <OrderCard key={order.id} order={order}/>
  ))}
</List>
  );
}
