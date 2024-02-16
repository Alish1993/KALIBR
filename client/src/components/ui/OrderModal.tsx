import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Dialog } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setToggleOrderModal } from '../../redux/slices/modals/modalsSlice';
import { addOrderThunk } from '../../redux/slices/orders/ordersThunks';
import type { OrderFormType } from '../../types/orderType';

export default function OrderModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const modalUser = useAppSelector((state) => state.modals.toggleOrderModal);
  const serviceData = useAppSelector((state) => state.loaderPackAuto.services); // объект с данными с калькулятора из слайса
  // console.log(serviceData, "данные с калькулятора из слайса")
  const [formData, setFormData] = useState<OrderFormType>({
    name: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleClose = (): void => {
    dispatch(setToggleOrderModal(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! этот код нужно исправить

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setError('Заполните все поля');
      return;
    }
    // объединение данных из модального окна и данных из калькулятора для отправки на сервер
    const dataToSend = { ...formData, ...serviceData };
    void dispatch(addOrderThunk(dataToSend));
    dispatch(setToggleOrderModal(false));
    // для всплытия предупреждения об уже оставленной заявке
    try {
      await dispatch(addOrderThunk(formData)); 
      setSuccessMessage('Спасибо! Мы скоро с Вами свяжемся!');
      setTimeout(() => {
        handleClose();
      }, 5000); // 5000 миллисекунд = 5 секунд
    } catch (error) {
      console.error('Error:', error);
      setError('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <Dialog
      open={modalUser}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {successMessage ? (
        <div style={{ padding: '20px' }}>
          <p>{successMessage}</p>
          <Button onClick={handleClose} variant="contained" color="primary">
            OK
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
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
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            id="margin-dense"
            margin="dense"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            id="margin-normal"
            margin="normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary" autoFocus>
            Close
          </Button>
        </form>
      )}
    </Dialog>
  );
}
