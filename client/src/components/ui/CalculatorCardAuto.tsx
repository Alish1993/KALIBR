import * as React from 'react';
import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  Card,
  Typography,
  TextField,
  Divider,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from '@mui/material';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import type { CalculatorTypeNoId } from '../../types/calculatorType';
import { formServiceObject } from '../../redux/slices/calculator/calcSlice';
import { useAppDispatch } from '../../redux/hooks';

export default function CalculatorCardAuto(): JSX.Element {
  const dispatch = useAppDispatch();

  const [amount, setAmount] = React.useState(''); // инпут для кол-ва машин
  const [machine, setMachine] = React.useState(''); // селект для выбора машины
  const [time, setTime] = React.useState(''); // инпут для времени работы
  const [path, setPath] = React.useState(''); // инпут для выбора расстояния
  const [isMachineSelected, setIsMachineSelected] = React.useState(false); // анимация машины

  // const handleChangeLoader = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const amountValue = event.target.value;
  //   setAmountLoader(amountValue); // или setAmountLoader(amountValue.toString());
  //   const formData: CalculatorTypeNoId = {
  //     amountLoader: parseInt(amountValue),
  //   } as CalculatorTypeNoId;
  //   dispatch(formServiceObject(formData));
  //   setIsLoaderSelected(true);
  //   setTimeout(() => setIsLoaderSelected(false), 300);
  // };

  // для анимации при выборе количества машин
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amountMachineValue = event.target.value;
    setAmount(amountMachineValue);
    const formData: CalculatorTypeNoId = {
      amountMachine: parseInt(amountMachineValue),
    } as CalculatorTypeNoId;
    dispatch(formServiceObject(formData));
    setIsMachineSelected(true); // Устанавливаем состояние, что машина выбрана
    setTimeout(() => setIsMachineSelected(false), 500); // Устанавливаем состояние обратно через 0.5 секунды, чтобы вернуть машину на старое место
  };

  // для анимации при выборе машины
  const handleChange = (event: SelectChangeEvent<string>) => {
    const typeMachineValue = event.target.value;
    setMachine(typeMachineValue);
    const formData: CalculatorTypeNoId = {
      machine: typeMachineValue,
    } as CalculatorTypeNoId;
    dispatch(formServiceObject(formData));
    setIsMachineSelected(true);
    setTimeout(() => setIsMachineSelected(false), 500);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeMachineValue = event.target.value;
    setTime(timeMachineValue);
    const formData: CalculatorTypeNoId = {
      time: parseInt(timeMachineValue),
    } as CalculatorTypeNoId;
    dispatch(formServiceObject(formData));
    setIsMachineSelected(true); // Устанавливаем состояние, что машина выбрана
    setTimeout(() => setIsMachineSelected(false), 500); // Устанавливаем состояние обратно через 0.5 секунды, чтобы вернуть машину на старое место
  };

  const handlePathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pathMachineValue = event.target.value;
    setPath(pathMachineValue);
    const formData: CalculatorTypeNoId = {
      path: parseInt(pathMachineValue),
    } as CalculatorTypeNoId;
    dispatch(formServiceObject(formData));
    setIsMachineSelected(true); // Устанавливаем состояние, что машина выбрана
    setTimeout(() => setIsMachineSelected(false), 500); // Устанавливаем состояние обратно через 0.5 секунды, чтобы вернуть машину на старое место
  };

  return (
    <Card variant="outlined" sx={{ Width: '90%', margin: '10px' }}>
      <Box sx={{ display: 'flex', paddingX: 2, backgroundColor: '#f0f0f0' }}>
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
                fontSize: '3.5rem',
                animation: isMachineSelected ? 'moveOut 1.7s forwards' : null,
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
        <Box sx={{ flex: '2 0 66%', paddingLeft: 2, display: 'flex' }}>
          {/* Первый столбец */}
          <Box sx={{ flex: '1 0 50%', paddingRight: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Кол-во машин начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '35ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="amountMachine"
                sx={{ backgroundColor: '#ffffff' }}
                label="Кол-во машин"
                value={amount}
                onChange={handleAmountChange}
              />
            </Box>
            {/* Кол-во машин конец */}
            {/* выбор машины начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '310px' } }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ m: 1, maxWidth: 320 }}>
                <InputLabel id="InputLabelmachine">Тип машины</InputLabel>
                <Select
                  labelId="labelIdmachine"
                  id="machine"
                  sx={{ backgroundColor: '#ffffff' }}
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
            </Box>
            {/* выбор машины конец */}
          </Box>

          {/* Второй столбец */}
          <Box sx={{ flex: '1 0 50%', paddingLeft: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Время работы начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '35ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="time"
                sx={{ backgroundColor: '#ffffff' }}
                label="Время работы"
                value={time}
                onChange={handleTimeChange}
              />
            </Box>
            {/* Время работы конец */}
            {/* Расстояние от МКАД начало */}
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '35ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="path"
                sx={{ backgroundColor: '#ffffff' }}
                label="Расстояние от МКАД"
                value={path}
                onChange={handlePathChange}
              />
            </Box>
            {/* Расстояние от МКАД конец */}
          </Box>
        </Box>
      </Box>
      {/* CSS анимация ухода машины за границы */}
      <style>{`
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

// {
//   /* <Box mt={5} display="flex" flexDirection="column" justifyContent="center">
//             <Box display="flex" flexDirection="row" justifyContent="center">
//               <Button sx={{ margin: 1 }} variant="contained" onClick={() => dispatch(increment())}>
//                 +
//               </Button>

//               <Button sx={{ margin: 1 }} variant="contained" onClick={() => dispatch(decrement())}>
//                 -
//               </Button>

//             </Box>
//             <Box mt={3} display="flex" flexDirection="row" justifyContent="center">
//               <Typography variant="h4">{counterValue}</Typography>
//             </Box>
//           </Box> */
// }
