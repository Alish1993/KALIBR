import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import CalculatorCardAuto from '../ui/CalculatorCardAuto';
import CalculatorCardLoader from '../ui/CalculatorCardLoader';
import CalculatorCardPackage from '../ui/CalculatorCardPackage';
import { useAppDispatch } from '../../redux/hooks';
import { setToggleOrderModal } from '../../redux/slices/modals/modalsSlice';
import OrderModal from '../ui/OrderModal';

export default function CalculatorPage(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Typography variant="h4" className="text-3xl font-bold mb-6" sx={{ color: '#1976D2' }}>
        Расчет стоимости переезда
      </Typography>
      <Typography variant="body1" className="mb-10">
        С помощью калькулятора Вы можете самостоятельно рассчитать стоимость квартирного, офисного,
        дачного или любого другого переезда буквально на пару минут. Все расчеты являются
        приблизительными, потому, что на окончательную цену переезда влияют многие факторы и нюансы,
        которые такой формой расчета сложно оценить.
      </Typography>
      <Box>
        <CalculatorCardAuto />
        <CalculatorCardLoader />
        <CalculatorCardPackage />
      </Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: 'xl', fontWeight: 'semibold', color: '#1976D2' }}
          >
            Общая стоимость:
          </Typography>
          <Typography variant="h5" sx={{ fontSize: '3xl', fontWeight: 'bold', color: '#1976D2' }}>
            0 руб.
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <TextField label="Номер телефона" variant="outlined" fullWidth />
        </Box>
        <OrderModal />
        <Button
                    variant="contained"
                    color="primary"
                    style={{
                      width: '20%',
                      height: '100%',
                      borderRadius: '30px',
                      marginLeft: '30px',
                    }}
                    onClick={() => {
                      dispatch(setToggleOrderModal(true));
                    }}
                  >
                   Отправить заявку
                  </Button>
      </Box>
    </Box>
  );
}
