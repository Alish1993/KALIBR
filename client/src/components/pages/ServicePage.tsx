import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const services = [
  'Офисный переезд',
  'Квартирный переезд',
  'VIP переезд',
  'Упаковка мебели и вещей',
  'Перевозка мебели',
  'Перестановка мебели',
  'Грузчики для переезда',
  'Такелажные работы',
  'Сборка и разборка мебели',
  'Машина для переезда',
  'Грузоперевозки',
  'Перевозка оборудования',
];

function ServicePage(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleClickOpen = (service: string) => {
    setSelectedService(service);
    setOpen(true);
    setTimeout(handleClose, 5000); // Закрыть диалог через 5 секунд
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '6rem' }}>
      <Typography variant="h1" align="center" gutterBottom>
        Все услуги
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Выберите в нужном разделе подходящую услугу, позвоните по телефону или свяжитесь с нами
        через удобный для Вас сервис связи на нашем сайте, и мы приступим к выполнению Вашего
        заказа.
      </Typography>
      <div
        className="grid grid-cols-3 gap-4"
        style={{
          marginTop: '1rem',
          alignItems: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {services.map((service, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            className="bg-blue-800 text-white p-4"
            style={{
              padding: '20px',
              margin: '12px 9px',
              width: '100%',
              height: '100px',
              borderRadius: '30px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              handleClickOpen(service);
            }}
          >
            {service}
          </Button>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedService}</DialogTitle>
        <DialogContent>
          {/* Add content for the dialog here */}
          <Typography variant="body1">
          Дополнительную информацию о услуге {selectedService} вы можете узнать, оставив свои данные.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ServicePage;




// 'Перевозка станков',
// 'Перевозка банкоматов',
// 'Перевозка сейфов',

// 'Перевозка шкафа',
// 'Перевозка дивана',
// 'Перевозка кровати',
// 'Перевозка комода',
// 'Перевозка стола',
// 'Перевозка кресла',
// 'Перевозка вещей',
// 'Перевозка зеркал',
// 'Перевозка пианино',
// 'Перевозка аквариумов',
// 'Перевозка антиквариата',
// 'Перевозка бильярдных столов',
// 'Перевозка ванны и джакузи',
// 'Перевозка пианино и рояля',

// 'Переезд комнаты',
// 'Переезд двухкомнатной квартиры',
// 'Переезд трехкомнатной квартиры',
// 'Переезд четырехкомнатной квартиры',
// 'Дачный переезд',
// 'Переезд склада',
// 'Переезд банка',
// 'Переезд коттеджа',
// 'Переезд магазина',
// 'Переезд предприятия',
