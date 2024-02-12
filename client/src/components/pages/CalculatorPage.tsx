import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CalculatorCardAuto from '../ui/CalculatorCardAuto';
import CalculatorCardLoader from '../ui/CalculatorCardLoader';
import CalculatorCardPackage from '../ui/CalculatorCardPackage';



export default function CalculatorPage(): JSX.Element {
  return (
    <Box>
      <Typography variant="h4" className="text-3xl font-bold mb-6">Расчет стоимости переезда</Typography>
      <Typography variant="body1" className="mb-10">
        С помощью калькулятора Вы можете самостоятельно рассчитать стоимость квартирного, офисного, дачного или любого другого переезда буквально на пару минут. Все расчеты являются приблизительными, потому, что на окончательную цену переезда влияют многие факторы и нюансы, которые такой формой расчета сложно оценить.
      </Typography>
      <Box>
        <CalculatorCardAuto/> 
        <CalculatorCardLoader/> 
        <CalculatorCardPackage/> 
      </Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontSize: 'xl', fontWeight: 'semibold' }}>Общая стоимость:</Typography>
          <Typography variant="h5" sx={{ fontSize: '3xl', fontWeight: 'bold' }}>0 руб.</Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <TextField label="Номер телефона" variant="outlined" fullWidth />
        </Box>
        <Button variant="contained" endIcon={<SendIcon />}>
        Отправить заявку
      </Button>
      </Box>
    </Box>
  );
}


