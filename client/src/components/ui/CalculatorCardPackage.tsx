import * as React from 'react';
import { TextField, Card, Box, Divider, Typography } from '@mui/material';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';

export default function CalculatorCardPackage(): JSX.Element {
  const [box, setBox] = React.useState('');
  const [roll, setRoll] = React.useState('');
  const [scotch, setScotch] = React.useState('');
  const [stretchRoll, setStretchRoll] = React.useState('');
  
  const [isPackageSelected, setIsPackageSelected] = React.useState(false);

  // анимация коробки при выборе их количества
  const handleChangeBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBox(event.target.value as string);
    setIsPackageSelected(true);
    setTimeout(() => setIsPackageSelected(false), 300);
  };

  const handleChangeRoll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoll(event.target.value as string);
    setIsPackageSelected(true);
    setTimeout(() => setIsPackageSelected(false), 300);
  };

  const handleChangeScotch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScotch(event.target.value as string);
    setIsPackageSelected(true);
    setTimeout(() => setIsPackageSelected(false), 300);
  };

  const handleChangeStretchRoll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStretchRoll(event.target.value as string);
    setIsPackageSelected(true);
    setTimeout(() => setIsPackageSelected(false), 300);
  };

  return (
    <Card variant="outlined" sx={{ margin: '10px' }}>
      <Box sx={{ display: 'flex', paddingX: 2, backgroundColor: '#f0f0f0'  }}>
        {/* Левая часть */}
        <Box sx={{ flex: '1 0 33%' }}>
          <Typography gutterBottom variant="h5" component="div">
            Упаковочные материалы
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ViewInArSharpIcon sx={{ marginRight: 1,
            fontSize: '3.5rem',
            animation: isPackageSelected ? 'rotate 0.3s forwards' : null, }} />
            {/* Изображение вставлено здесь */}
          </Box>
          <Typography color="text.secondary" variant="body2">
            Самые прочные
          </Typography>
        </Box>
        {/* Вертикальная черта-разделитель */}
        <Divider orientation="vertical" flexItem />
        {/* Правая часть */}
        <Box sx={{ flex: '1 0 66%', paddingLeft: 2, display: 'flex' }}> {/* Изменение здесь */}
          {/* Первый столбец */}
          <Box sx={{ flex: '1 0 50%', paddingRight: 1, display: 'flex', flexDirection: 'column' }}> {/* Изменение здесь */}
            {/* выбор кол-ва коробок начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
              
            >
              <TextField
                id="box"
                sx={{ backgroundColor: '#ffffff'}}
                label="Короб 600*400*400 мм"
                value={box}
                onChange={handleChangeBox}
              />
            </Box>
            {/* выбор кол-ва рулонов пленки начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="roll"
                sx={{ backgroundColor: '#ffffff'}}
                label="Плёнка воздушно-пузырьковая, рулон"
                value={roll}
                onChange={handleChangeRoll}
              />
            </Box>
          </Box>
          {/* Второй столбец */}
          <Box sx={{ flex: '1 0 50%', paddingLeft: 1, display: 'flex', flexDirection: 'column' }}> {/* Изменение здесь */}
            {/* выбор кол-ва скотча начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="scotch"
                sx={{ backgroundColor: '#ffffff'}}
                label="Скотч"
                value={scotch}
                onChange={handleChangeScotch}
              />
            </Box>
            {/* выбор кол-ва рулонов стрейч-пленки начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="stretchRoll"
                sx={{ backgroundColor: '#ffffff'}}
                label="Стрейч-пленка, рулон"
                value={stretchRoll}
                onChange={handleChangeStretchRoll}
              />
            </Box>
             {/* выбор кол-ва рулонов стрейч-пленки конец */}
          </Box>
        </Box>
      </Box>
      <style jsx>{`
         @keyframes rotate {
           0% {
             transform: rotate(0deg);
           }
           100% {
             transform: rotate(360deg);
           }
         }
         }
       `}</style>
    </Card>
  );
}