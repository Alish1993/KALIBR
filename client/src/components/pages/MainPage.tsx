import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Grid, Typography, Button, Tabs, Tab } from '@mui/material';
import fon from '../../../public/photo_5341680620679583453_y.jpg';

const theme = {}; // Вам нужно определить тему или использовать импортированную тему

export default function MainPage(): JSX.Element {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 8,
          backgroundImage:
            'https://lirp.cdn-website.com/c021da43/dms3rep/multi/opt/shutterstock_1177270189-1920w.jpg',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '1000px',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={25} sm={25} sx={{ position: 'relative' }}>
            <div>
              <img
                src="https://avatars.mds.yandex.net/get-ydo/2426891/2a000001737cbadc1566f63fef5011c47f84/diploma"
                alt="description"
                width="1030"
                height="500"
              />
              <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '1' }}>
                <Typography variant="h1" className="text-5xl font-bold mb-6">
                  Услуги переезда
                </Typography>
                <ul className="text-lg mb-8">
                  <li className="flex items-center mb-4">
                    <i className="fas fa-check text-green-500 mr-2" />
                    Работаем на рынке мувинга с 2000 года
                  </li>
                  <li className="flex items-center mb-4">
                    <i className="fas fa-check text-green-500 mr-2" />
                    Современный парк грузовых машин
                  </li>
                  <li className="flex items-center mb-4">
                    <i className="fas fa-check text-green-500 mr-2" />
                    Только профессиональные грузчики
                  </li>
                  <li className="flex items-center mb-4">
                    <i className="fas fa-check text-green-500 mr-2" />
                    Прозрачные и доступные цены
                  </li>
                </ul>
                <div className="flex">
                  <Button variant="contained" color="primary" sx={{ mr: 4 }}>
                    Узнать цены
                  </Button>
                  <Button variant="contained" color="secondary">
                    Оставить заявку
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="text-lg mt-8">
          <p>
            Предоставляем услуги переезда в Москве и области более 15 лет. Если Вам нужна
            профессиональная помощь, обращайтесь! Быстро проведем предварительную оценку, подготовим
            необходимую упаковку, выполним все подготовительные работы, погрузим имущество в
            автотранспорт и доставим на новое место.
          </p>
        </div>

        <Box
          sx={{
            maxWidth: { xs: 500, sm: 1200 },
            bgcolor: 'background.paper',
            margin: 'auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
        <div className="text-lg mt-8">
          <Typography variant="h2" align="center" gutterBottom>
            Почему нас выбирают
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <img
                src="https://vdecret.com/wp-content/uploads/4c01dcbba49a57535b133bd7ae2895e8-700x378.png"
                alt="description"
                width="250"
                height="250"
              />
              <Typography variant="h3" align="center" gutterBottom>
                Удобный сервис
              </Typography>
              <Typography align="center">
                Всегда начинаем заказ в удобное для клиента время и заканчиваем в установленные
                сроки. Предоставляем полный спектр услуг круглосуточно, срочно, в выходные и
                праздничные дни.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="https://fixedratemoving.com/wp-content/uploads/2019/04/Movers.jpg"
                alt="description"
                width="250"
                height="250"
              />
              <Typography variant="h3" align="center" gutterBottom>
                Опыт, проверенный временем
              </Typography>
              <Typography align="center">
                «Доверяй, но проверяй» «Доверяй, но проверяй» - эта поговорка точно не про нас.
                Когда-то в начале 2000 года мы были новичками в своём деле, но сейчас у нас за
                плечами многолетний опыт и нам доверяют многие.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="https://rockstarpromovers.com/wp-content/uploads/2021/01/movers.png"
                alt="description"
                width="300"
                height="250"
              />
              <Typography variant="h3" align="center" gutterBottom>
                Мы любим то, что делаем
              </Typography>
              <Typography align="center">
                Любая помощь с нашей стороны, всегда несёт добро. Мы любим своё дело и рады, что
                можем помочь многим физическим лицам и юридическим организациям решить ту или иную
                задачу.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className="text-lg mt-8">
          <Typography variant="h2" align="center" gutterBottom>
            Этапы проведения переезда
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <img
                src="https://avatars.mds.yandex.net/get-ydo/2426891/2a000001737cbadc1566f63fef5011c47f84/diploma"
                alt="description"
                width="250"
                height="400"
              />
              <Typography align="center">
                Звоните нам по телефону или оставляйте онлайн-заявку на сайте.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img
                src="https://avatars.mds.yandex.net/get-ydo/2426891/2a000001737cbadc1566f63fef5011c47f84/diploma"
                alt="description"
                width="250"
                height="400"
              />
              <Typography align="center">
                Проводим расчёт стоимости, оформляем заказ, подписываем договор.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img
                src="https://avatars.mds.yandex.net/get-ydo/2426891/2a000001737cbadc1566f63fef5011c47f84/diploma"
                alt="description"
                width="250"
                height="400"
              />
              <Typography align="center">
                Выполняем переезд, если нужно разбираем-собираем, упаковываем, расставляем.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img
                src="https://www.pngitem.com/middle/mxxoxR_transparent-phone-vector-png-vector-graphics-png-download/"
                alt="description"
                width="250"
                height="400"
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </ThemeProvider>
  );
}
ё