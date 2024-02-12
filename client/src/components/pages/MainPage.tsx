import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Tabs, Tab, Typography, Slide, Box, Grid, Button } from '@mui/material';
import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import RequestQuoteTwoToneIcon from '@mui/icons-material/RequestQuoteTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';

const theme = {}; // Вам нужно определить тему или использовать импортированную тему
const tabContent = [
  {
    label: 'Tab 1',
    text: 'Мы готовы перевезти Ваш офис в максимально сжатые сроки.',
    img: 'https://www.pereezd-ideal.ru/pictures/ofis/service.jpg',
    icon: <PhonelinkRingTwoToneIcon />,
  },
  {
    label: 'Tab 2',
    text: 'Окажем профессиональную помощь в квартирном переезде – Ваше участие будет минимальным.',
    img: 'https://www.pereezd-ideal.ru/pictures/kvart/service.jpg',
    icon: <RequestQuoteTwoToneIcon />,
  },
  {
    label: 'Tab 3',
    text: 'Предлагаем услуги квалифицированных грузчиков для решения различных погрузо-разгрузочных задач.',
    img: 'https://www.pereezd-ideal.ru/pictures/gruzchiki/service.jpg',
    icon: <LocalShippingTwoToneIcon />,
  },
];

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
          backgroundImage: '', // для фото
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '1000px',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} sx={{ position: 'relative' }}>
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
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Работаем на рынке мувинга с 2000 года
                  </li>
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Современный парк грузовых машин
                  </li>
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Только профессиональные грузчики
                  </li>
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">&#10003;</span>
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
          <div>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              {tabContent.map((tab, index) => (
                <Tab key={index} label={tab.label} />
              ))}
            </Tabs>

            <div style={{ marginTop: '20px' }}>
              {tabContent.map((tab, index) => (
                <Box
                  key={index}
                  sx={{
                    display: value === index ? 'block' : 'none',
                  }}
                >
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={6}>
                      <Typography variant="h5">{tab.text}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <img src={tab.img} alt="description" width="200" />
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="contained" endIcon={tab.icon}>
                        Button
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </div>
          </div>
        </Box>

        <div className="text-lg mt-8">
          <Typography variant="h2" align="center" gutterBottom>
            Почему нас выбирают
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/91TpDKhj0eL._AC_SL1500_.jpg"
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
                src="https://30.img.avito.st/image/1/1.U7_TCraB_1alrw1Q-VNhzxyp-1Bxq_9QFsr7UKWvDVBlrfNSZav_Eg.Y2ZEvGfySPyfkoIRqs7fBmcevcmqtz1w8tNl9ia0uiA"
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

          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <PhonelinkRingTwoToneIcon sx={{ width: 100, height: 400 }} />
                <Typography align="center" style={{ fontWeight: 'bold' }}>
                  Звоните нам по телефону или оставляйте онлайн-заявку на сайте.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <RequestQuoteTwoToneIcon sx={{ width: 100, height: 400 }} />
                <Typography align="center" style={{ fontWeight: 'bold' }}>
                  Проводим расчёт стоимости, оформляем заказ, подписываем договор.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <LocalShippingTwoToneIcon sx={{ width: 100, height: 400 }} />
                <Typography align="center" style={{ fontWeight: 'bold' }}>
                  Выполняем переезд, если нужно разбираем-собираем, упаковываем, расставляем.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <RedeemTwoToneIcon sx={{ width: 100, height: 400 }} />
                <Typography align="center" style={{ fontWeight: 'bold' }}>
                  Принимаете нашу работу и производите оплату удобным для Вас способом.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </ThemeProvider>
  );
}
