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
    label: 'Офисный переезд',
    text: 'Мы готовы перевезти Ваш офис в максимально сжатые сроки.',
    img: 'https://img.freepik.com/free-photo/medium-shot-woman-packing-office-items_23-2149392086.jpg?w=1060&t=st=1707727404~exp=1707728004~hmac=fb3a24d840a9e30ab8a7dd930dad06424652cc5013e0681fc64b60e7e6cbb1cb',
    icon: <PhonelinkRingTwoToneIcon />,
  },
  {
    label: 'Квартирный переезд',
    text: 'Окажем профессиональную помощь в квартирном переезде – Ваше участие будет минимальным.',
    img: 'https://img.freepik.com/free-photo/carefree-family-having-fun-while-moving-into-new-home_637285-12376.jpg?w=1060&t=st=1707727527~exp=1707728127~hmac=46eb8b3efc68cbab54e08a27732a96cd78debda0bd4c1a65e9701c61f21f58c6',
    icon: <RequestQuoteTwoToneIcon />,
  },
  {
    label: 'Грузчики для переезда',
    text: 'Предлагаем услуги квалифицированных грузчиков для решения различных погрузо-разгрузочных задач.',
    img: 'https://img.freepik.com/premium-photo/two-handsome-workers-wearing-uniforms-are-unloading-the-van-full-of-boxes_472597-3625.jpg?w=1060',
    icon: <LocalShippingTwoToneIcon />,
  },
];

export default function MainPage(): JSX.Element {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styleUl = {
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: ' 7px',
    padding: '20px 10px',
    width: '400px',
  };
  const styleLi = {
    padding: '0 0 0 20px',
    color: 'white',
    listStyle: 'none',
    fontSize: '20px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Box

      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} sx={{ position: 'relative' }}>
            <div>
              <video 
                src="https://videocdn.cdnpk.net/cdn/content/video/free/video0540/large_preview/_import_6311aed696e8b0.21321500.mp4"
                autoPlay
                loop
                muted
                style={{ width: '100%', borderRadius: '20px' }}
              />
              <div style={{ position: 'absolute', top: '370px', left: '40px', zIndex: '1' }}>
                <div style={{ position: 'absolute', top: '-340px', left: '20px', zIndex: '1' }}>
                  {' '}
                  <Typography
                    style={{ width: '800px', color: 'white', fontSize: '90px' }}
                    variant="h1"
                    className="text-5xl font-bold mb-6"
                  >
                    Услуги переезда
                  </Typography>
                </div>
                <ul style={styleUl} className="text-lg mb-8">
                  <li style={styleLi} className="flex items-center mb-4">
                    Работаем на рынке мувинга с 2000 года
                  </li>
                  <li style={styleLi} className="flex items-center mb-4">
                    Современный парк грузовых машин
                  </li>
                  <li style={styleLi} className="flex items-center mb-4">
                    Только профессиональные грузчики
                  </li>
                  <li style={styleLi} className="flex items-center mb-4">
                    Прозрачные и доступные цены
                  </li>
                </ul>
                <div className="flex" style={{ display: 'flex' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 2 }}
                    style={{ width: '100%', height: '100%', borderRadius: '20px' }} // Размер кнопок изменен на 50%
                  >
                    Узнать цены
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: '100%', height: '100%', borderRadius: '20px' }} // Размер кнопок изменен на 50%
                  >
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
            marginTop: '70px',
          }}
        >
          <div>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              {tabContent.map((tab, index) => (
                <Tab style={{ fontSize: '32px' }} key={index} label={tab.label} />
              ))}
            </Tabs>

            <div style={{ marginTop: '10px' }}>
              {tabContent.map((tab, index) => (
                <Box
                  key={index}
                  sx={{
                    display: value === index ? 'block' : 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      height: '300px',
                      background: 'rgba(0, 0, 0, 0.04)',
                      borderRadius: '20px',
                    }}
                  >
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item xs={3}>
                        <img
                          style={{ borderRadius: '20px' }}
                          src={tab.img}
                          alt="description"
                          width="440px"
                        />
                      </Grid>
                      <div
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                      >
                        <Grid item xs={6}>
                          <div>
                            <Typography variant="h5">{tab.text}</Typography>
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <Button variant="contained" endIcon={tab.icon}>
                            Button
                          </Button>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Box>
              ))}
            </div>
          </div>
        </Box>

        <div className="text-lg mt-8" style={{ marginTop: '80px' }}>
          <Typography variant="h2" align="center" gutterBottom>
            Почему нас выбирают
          </Typography>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <img
                src="https://img.freepik.com/free-photo/young-courier-and-his-colleague-unloading-cardboard-boxes-from-delivery-van_637285-2293.jpg?w=1380&t=st=1707740937~exp=1707741537~hmac=f73671359f4b638e36210d4287ce930f38c7032ea64c92bb7fd8add6cf0912e0"
                alt="description"
                width="360"
                height="250"
                style={{ backgroundSize: 'contain', borderRadius: '15px' }}
              />
              <Typography variant="h4" align="center" gutterBottom>
                Удобный сервис
              </Typography>
              <Typography align="center">
                Всегда начинаем заказ в удобное для клиента время и заканчиваем в установленные
                сроки. Предоставляем полный спектр услуг круглосуточно, срочно, в выходные и
                праздничные дни.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <img
                src="https://30.img.avito.st/image/1/1.U7_TCraB_1alrw1Q-VNhzxyp-1Bxq_9QFsr7UKWvDVBlrfNSZav_Eg.Y2ZEvGfySPyfkoIRqs7fBmcevcmqtz1w8tNl9ia0uiA"
                alt="description"
                width="360"
                height="250"
                style={{ backgroundSize: 'contain', borderRadius: '15px' }}
              />
              <Typography variant="h4" textAlign="center" gutterBottom>
                Опыт, проверенный временем
              </Typography>
              <Typography textAlign="center">
                «Доверяй, но проверяй» - эта поговорка точно не про нас. Когда-то в начале 2000 года
                мы были новичками в своём деле, но сейчас у нас за плечами многолетний опыт и нам
                доверяют многие.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <img
                src="https://rockstarpromovers.com/wp-content/uploads/2021/01/movers.png"
                alt="description"
                width="360"
                height="250"
                style={{ backgroundSize: 'contain', borderRadius: '15px' }}
              />
              <Typography variant="h4" textAlign="center" gutterBottom>
                Мы любим то, что делаем
              </Typography>
              <Typography textAlign="center">
                Любая помощь с нашей стороны, всегда несёт добро. Мы любим своё дело и рады, что
                можем помочь многим физическим лицам и юридическим организациям решить ту или иную
                задачу.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className="text-lg mt-8" style={{ marginTop: '80px' }}>
          <Typography variant="h2" textAlign="center" gutterBottom>
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
