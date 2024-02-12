// import * as React from 'react';
// import {
//   Box,
//   Card,
//   Typography,
//   TextField,
//   Divider,
//   InputLabel,
//   MenuItem,
//   FormHelperText,
//   FormControl,
//   Select,
// } from '@mui/material';
// import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
// // import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// // import { decrement, increment } from '../../redux/slices/counter/counterSlice';

// export default function CalculatorCardAuto(): JSX.Element {
//   // const counterValue = useAppSelector((state) => state.counter.value);
//   // const dispatch = useAppDispatch();

//   const [machine, setMachine] = React.useState(''); // селект для выбора машины
//   const [amount, setAmount] = React.useState(''); // инпут для кол-ва машин
//   const [time, setTime] = React.useState(''); // инпут для времени работы
//   const [path, setPath] = React.useState(''); // инпут для выбора расстояния

//   const [isMachineSelected, setIsMachineSelected] = React.useState(false); // анимация машины

//   // для анимации при выборе машины
//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setMachine(event.target.value as string);
//     setIsMachineSelected(true); // Устанавливаем состояние, что машина выбрана
//     setTimeout(() => setIsMachineSelected(false), 500); // Устанавливаем состояние обратно через 0.5 секунды, чтобы вернуть машину на старое место
//   };

//   // для анимации при выборе количества машин
//   const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setAmount(event.target.value);
//     setIsMachineSelected(true); // Устанавливаем состояние, что машина выбрана
//     setTimeout(() => setIsMachineSelected(false), 500); // Устанавливаем состояние обратно через 0.5 секунды, чтобы вернуть машину на старое место
//   };

//   return (
//     <Card variant="outlined" sx={{ Width: '90%', margin: '10px' }}>
//       <Box sx={{ display: 'flex', paddingX: 2 }}>
//         {/* Левая часть */}
//         <Box sx={{ flex: '1 0 33%' }}>
//           <Typography gutterBottom variant="h5" component="div">
//             Грузовые автомобили
//           </Typography>
//           <Box
//             sx={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
//           >
//             <LocalShippingRoundedIcon
//               sx={{
//                 marginRight: 1,
//                 animation: isMachineSelected ? 'moveOut 0.3s forwards' : null,
//               }}
//             />
//           </Box>
//           <Typography color="text.secondary" variant="body2">
//             Самые вместительные и быстрые
//           </Typography>
//         </Box>
//         {/* Вертикальная черта-разделитель */}
//         <Divider orientation="vertical" flexItem />
//         {/* Правая часть */}
//         <Box sx={{ flex: '2 0 66%', paddingLeft: 2, display: 'flex' }}>
//           {/* Первый столбец */}
//           <Box sx={{ flex: '1 0 50%', paddingRight: 1, display: 'flex', flexDirection: 'column' }}>
//             {/* выбор машины начало */}
//             <Box
//               component="form"
//               sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '500px' } }}
//               noValidate
//               autoComplete="off"
//             >
//               <FormControl sx={{ m: 1, maxWidth: 320 }}>
//                 <InputLabel id="InputLabelmachine">Тип машины</InputLabel>
//                 <Select
//                   labelId="labelIdmachine"
//                   id="machine"
//                   value={machine}
//                   label="Тип машины"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="">
//                     <em>Выбрать</em>
//                   </MenuItem>
//                   <MenuItem value={10}>Газель1</MenuItem>
//                   <MenuItem value={20}>Газель2</MenuItem>
//                   <MenuItem value={30}>Газель3</MenuItem>
//                 </Select>
//                 <FormHelperText>Выбрать машину</FormHelperText>
//               </FormControl>
//             </Box>
//             {/* выбор машины конец */}

//             {/* Кол-во машин начало */}
//             <Box
//               component="form"
//               sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField
//                 id="amount"
//                 label="Кол-во машин"
//                 value={amount}
//                 // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                 //   setAmount(event.target.value);
//                 // }
//                 onChange={handleAmountChange}
//               />
//             </Box>
//             {/* Кол-во машин конец */}
//           </Box>

//           {/* Второй столбец */}
//           <Box sx={{ flex: '1 0 50%', paddingLeft: 1, display: 'flex', flexDirection: 'column' }} />

//           {/* Время работы начало */}
//           <Box
//             component="form"
//             sx={{
//               '& > :not(style)': { m: 1, width: '40ch' },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               id="time"
//               label="Время работы"
//               value={time}
//               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                 setTime(event.target.value);
//               }}
//             />
//           </Box>
//           {/* Время работы конец */}

//           {/* Расстояние от МКАД начало */}
//           <Box
//             component="form"
//             sx={{
//               '& > :not(style)': { m: 1, width: '40ch' },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               id="path"
//               label="Расстояние от МКАД"
//               value={path}
//               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                 setPath(event.target.value);
//               }}
//             />
//           </Box>
//           {/* Расстояние от МКАД конец */}
//         </Box>
//       </Box>

//       {/* CSS анимация ухода машины за границы */}
//       <style jsx>{`
//          @keyframes moveOut {
//            0% {
//              transform: translateX(0);
//            }
//            100% {
//              transform: translateX(1550%);
//            }
//          }
//          }
//        `}</style>
//     </Card>
//   );
// }

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

import * as React from 'react';
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

export default function CalculatorCardAuto(): JSX.Element {
  const [machine, setMachine] = React.useState(''); 
  const [amount, setAmount] = React.useState(''); 
  const [time, setTime] = React.useState(''); 
  const [path, setPath] = React.useState(''); 
  const [isMachineSelected, setIsMachineSelected] = React.useState(false); 

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMachine(event.target.value as string);
    setIsMachineSelected(true); 
    setTimeout(() => setIsMachineSelected(false), 500); 
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
    setIsMachineSelected(true); 
    setTimeout(() => setIsMachineSelected(false), 500); 
  };

  return (
    <Card variant="outlined" sx={{ Width: '90%', margin: '10px' }}>
      <Box sx={{ display: 'flex', paddingX: 2 }}>
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
        <Divider orientation="vertical" flexItem />
        <Box sx={{ flex: '2 0 66%', paddingLeft: 2, display: 'flex' }}>
          <Box sx={{ flex: '1 0 50%', paddingRight: 1, display: 'flex', flexDirection: 'column' }}>
          <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="amount"
                label="Кол-во машин"
                value={amount}
                onChange={handleAmountChange}
              />
            </Box>
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '500px' } }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ m: 1, maxWidth: 320 }}>
                <InputLabel id="InputLabelmachine">Тип машины</InputLabel>
                <Select
                  labelId="labelIdmachine"
                  id="machine"
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

      
          </Box>
          <Box sx={{ flex: '1 0 50%', paddingLeft: 1, display: 'flex', flexDirection: 'column' }}>
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="time"
                label="Время работы"
                value={time}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTime(event.target.value);
                }}
              />
            </Box>
            <Box
              component="form"
              sx={{ margin: '10px', '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="path"
                label="Расстояние от МКАД"
                value={path}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPath(event.target.value);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
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