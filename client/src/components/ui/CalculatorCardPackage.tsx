import * as React from 'react';
import { TextField, Card, Box, Divider, Typography } from '@mui/material';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';

export default function CalculatorCardPackage(): JSX.Element {
  const [box, setBox] = React.useState('');
  const [roll, setRoll] = React.useState('');
  const [scotch, setScotch] = React.useState('');
  const [stretchRoll, setStretchRoll] = React.useState('');

  return (
    <Card variant="outlined" sx={{ margin: '10px' }}>
      <Box sx={{ display: 'flex', paddingX: 2 }}>
        {/* Левая часть */}
        <Box sx={{ flex: '1 0 33%' }}>
          <Typography gutterBottom variant="h5" component="div">
            Упаковочные материалы
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ViewInArSharpIcon sx={{ marginRight: 1 }} />
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
                label="Короб 600*400*400 мм"
                value={box}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setBox(event.target.value);
                }}
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
                label="Плёнка воздушно-пузырьковая, рулон"
                value={roll}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setRoll(event.target.value);
                }}
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
                label="Скотч"
                value={scotch}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setScotch(event.target.value);
                }}
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
                label="Стрейч-пленка, рулон"
                value={stretchRoll}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStretchRoll(event.target.value);
                }}
              />
            </Box>
             {/* выбор кол-ва рулонов стрейч-пленки конец */}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}