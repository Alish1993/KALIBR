import React, { useEffect } from 'react';
import { Container, Grid, TextField, Typography, Button } from '@mui/material';

export default function ContactsPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/2.1/?apikey=a3195520-5a1e-4207-8c88-9880f4c179a5&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          center: [55.816854, 37.590704],
          zoom: 17,
        });
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: '5rem' }}>
      <Typography variant="h2" align="center" gutterBottom style={{ marginBottom: '2rem' }}>
        Контакты
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Адрес:
            </Typography>
            <Typography variant="body1" gutterBottom>
              г. Москва, ул. Гончарова 19а
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Телефоны:
            </Typography>
            <Typography variant="body1" gutterBottom>
              +7 (977) 326-09-90 городской <br />
              +7 (963) 967-35-35 для мобильных
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Часы работы:
            </Typography>
            <Typography variant="body1" gutterBottom>
              ежедневно с 8:00 до 22:00 без выходных
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Почта:
            </Typography>
            <Typography variant="body1" gutterBottom>
              для оформления заказов zakaz@pereezd-ideal.ru <br />
              для общих вопросов info@pereezd-ideal.ru
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Реквизиты:
            </Typography>
            <Typography variant="body1">
              ООО "АЛИ и ИБР" <br />
              ОГРН: 1117746159002 <br />
              ИНН: 7733760573 <br />
              КПП: 773301001
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <div id="map" className="map" style={{ height: '400px', marginBottom: '20px' }}>
              {/* Карта будет отображаться здесь */}
            </div>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          marginTop: '100px',
          width: '100%',
          height: '593px',
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '95px' }}>
          Обратная связь
        </Typography>
        <form action="#" method="POST" style={{ width: '90%' }}>
          <div style={{ marginBottom: '20px' }}>
            <TextField fullWidth variant="outlined" name="name" label="Ваше имя" margin="normal" />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <TextField
              fullWidth
              variant="outlined"
              name="phone"
              label="Ваш телефон*"
              type="tel"
              margin="normal"
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <TextField
              fullWidth
              variant="outlined"
              name="message"
              label="Сообщение"
              multiline
              rows={4}
              margin="normal"
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              style={{ width: '70%', height: '110%', borderRadius: '20px', margin: '65px' }}
            >
              Получить ответ
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
