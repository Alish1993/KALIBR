import * as React from 'react';
import { Card, Box, Divider, Typography, TextField } from '@mui/material';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';

export default function CalculatorCardLoader(): JSX.Element {
  const [amountLoader, setAmountLoader] = React.useState(''); // инпут для кол-ва грузчиков
  const [timeLoader, setTimeloader] = React.useState(''); // инпут для выбора времени

  const [isLoaderSelected, setIsLoaderSelected] = React.useState(false); // анимация грузчика

  // анимация грузчика при выборе их количества
  const handleChangeLoader = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAmountLoader(event.target.value as string);
    setIsLoaderSelected(true);
    setTimeout(() => setIsLoaderSelected(false), 300);
  };

  const handleChangeTimeLoader = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimeloader(event.target.value as string);
    setIsLoaderSelected(true);
    setTimeout(() => setIsLoaderSelected(false), 300);
  };

  return (
    <Card variant="outlined" sx={{ Width: '90%', margin: '10px' }}>
      <Box sx={{ display: 'flex', paddingX: 2, backgroundColor: '#f0f0f0' }}>
        {/* Левая часть */}
        <Box sx={{ flex: '1 0 33%' }}>
          <Typography gutterBottom variant="h5" component="div">
            Грузчики
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PeopleAltSharpIcon sx={{ marginRight: 1,
            fontSize: '4.5rem',
            animation: isLoaderSelected ? 'moveUp 0.9s forwards 3' : null, }} />
            {/* Изображение вставлено здесь */}
          </Box>
          <Typography color="text.secondary" variant="body2">
            Самые лучшие
          </Typography>
        </Box>
        {/* Вертикальная черта-разделитель */}
        <Divider orientation="vertical" flexItem />
        {/* Правая часть */}
        <Box sx={{ flex: '1 0 66%', paddingLeft: 2 }}>
          {/* выбор кол-ва грузчиков начало */}
          <Box
            component="form"
            sx={{ margin: '10px',
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              sx={{ backgroundColor: '#ffffff'}}
              label="Кол-во грузчиков"
              value={amountLoader}
              onChange={handleChangeLoader}
            />
          </Box>
          {/* выбор кол-ва грузчиков конец */}

          {/* выбор кол-ва часов работы грузчиков начало */}
          <Box
            component="form"
            sx={{ margin: '10px',
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              sx={{ backgroundColor: '#ffffff'}}
              label="Время работы"
              value={timeLoader}
              onChange={handleChangeTimeLoader}
            />
          </Box>
          {/* выбор кол-ва часов работы грузчиков конец */}
        </Box>
      </Box>
      <style jsx>{`
         @keyframes moveUp {
           0% {
             transform: translateY(0);
           }
           100% {
             transform: translateY(-60%);
           }
         }
         }
       `}</style>
    </Card>
  );
}
