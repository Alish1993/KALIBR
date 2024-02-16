import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Dialog } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { OrderFormType, OrderType } from '../../types/orderType';
import { setCurrentOrder } from '../../redux/slices/orders/ordersSlice';
import { editOrderThunk } from '../../redux/slices/orders/ordersThunks';

export default function EditOrderModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentOrder = useAppSelector((store) => store.orders.currentOrder);

  const handleClose = (): void => {
    dispatch(setCurrentOrder(null));
  };

  const [error, setError] = useState('');

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!formData.name || !formData.phone || !formData.email) {
      setError('Заполните все поля');
    }
    void dispatch(
      editOrderThunk({ id: currentOrder?.id, formData } as {
        id: OrderType['id'];
        formData: OrderFormType;
      }),
    );
    dispatch(setCurrentOrder(null));
  };

  return (
    <Dialog
      open={!!currentOrder}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form
        onSubmit={submitHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
        }}
      >
        <TextField
          label="Name"
          id="margin-none"
          type="text"
          name="name"
          defaultValue={currentOrder?.name}
        />
        <TextField
          label="Phone"
          id="margin-dense"
          margin="dense"
          type="tel"
          name="phone"
          defaultValue={currentOrder?.phone}
        />
        <TextField
          label="Email"
          id="margin-normal"
          margin="normal"
          type="email"
          name="email"
          defaultValue={currentOrder?.email}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Button variant="contained" color="primary" type="submit">
          Отправить
        </Button>
        <Button onClick={handleClose} variant="contained" color="secondary" autoFocus>
          Закрыть
        </Button>
      </form>
    </Dialog>
  );
}
