import * as React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Box, Typography, TextField } from '@mui/material';
// import { decrement, increment } from '../../redux/slices/counter/counterSlice';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function CalculatorCardAuto(): JSX.Element {
  // const counterValue = useAppSelector((state) => state.counter.value);
  // const dispatch = useAppDispatch();

  const [amount, setAmount] = React.useState(''); //управляемый инпут для кол-ва машин
  const [time, setTime] = React.useState(''); //управляемый инпут для времени работы
  const [path, setPath] = React.useState(''); //управляемый инпут для времени работы
  const [machine, setMachine] = React.useState(''); //для выбора машины
  const [isMachineSelected, setIsMachineSelected] = React.useState(false); //для анимации

  //для анимации при выборе машины
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMachine(event.target.value as string);
    setIsMachineSelected(true); // Устанавливаем состояние, что машина выбрана
    setTimeout(() => setIsMachineSelected(false), 500); // Устанавливаем состояние обратно через 0.5 секунды, чтобы вернуть машину на старое место
  };

    //для анимации при выборе количества машин
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
    setIsMachineSelected(true); // Устанавливаем состояние, что машина выбрана
    setTimeout(() => setIsMachineSelected(false), 500); // Устанавливаем состояние обратно через 0.5 секунды, чтобы вернуть машину на старое место
  };

  return (
    <Card variant="outlined" sx={{ Width: '90%', margin: '10px' }}>
      <Box sx={{ display: 'flex', paddingX: 2 }}>
        {/* Левая часть */}
        <Box sx={{ flex: '1 0 33%' }}>
          <Typography gutterBottom variant="h5" component="div">
            Грузовые автомобили
          </Typography>
          <Box
            sx={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <LocalShippingRoundedIcon
              sx={{
                marginRight: 1,
                animation: isMachineSelected ? 'moveOut 0.3s forwards' : null,
              }}
            />
          </Box>
          <Typography color="text.secondary" variant="body2">
            Самые вместительные и быстрые
          </Typography>
        </Box>
        {/* Вертикальная черта-разделитель */}
        <Divider orientation="vertical" flexItem />
        {/* Правая часть */}
        <Box sx={{ flex: '2 0 66%', paddingLeft: 2 }}>

          {/*выбор машины начало*/}
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">Тип машины</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={machine}
              label="Тип машины"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Выбрать</em>
              </MenuItem>
              <MenuItem value={10}>Газель1</MenuItem>
              <MenuItem value={20}>Газель2</MenuItem>
              <MenuItem value={30}>Газель3</MenuItem>
            </Select>
            <FormHelperText>Выбрать машину</FormHelperText>
          </FormControl>
          {/*выбор машины конец*/}

          {/*Кол-во машин начало*/}
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              label="Кол-во машин"
              value={amount}
              label="Кол-во машин"
              // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              //   setAmount(event.target.value);
              // }
              onChange={handleAmountChange}
            />
          </Box>
          {/*Кол-во машин конец*/}

          {/*Время работы начало*/}
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              label="Время работы"
              value={time}
              label="Время работы"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTime(event.target.value);
              }}
            />
          </Box>
          {/*Время работы конец*/}

          {/*Расстояние от МКАД начало*/}
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              label="Расстояние от МКАД"
              value={path}
              label="Расстояние от МКАД"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPath(event.target.value);
              }}
            />
          </Box>
          {/*Расстояние от МКАД конец*/}

          {/* <Box mt={5} display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Button sx={{ margin: 1 }} variant="contained" onClick={() => dispatch(increment())}>
                +
              </Button>

              <Button sx={{ margin: 1 }} variant="contained" onClick={() => dispatch(decrement())}>
                -
              </Button>
      
            </Box>
            <Box mt={3} display="flex" flexDirection="row" justifyContent="center">
              <Typography variant="h4">{counterValue}</Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
      {/* CSS анимация ухода машины за границы*/}
      <style jsx>{`
         @keyframes moveOut {
           0% {
             transform: translateX(0);
           }
           100% {
             transform: translateX(1550%);
           }
         }
         }
       `}</style>
    </Card>
  );
}
