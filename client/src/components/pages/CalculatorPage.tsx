import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CalculatorCardAuto from '../ui/CalculatorCardAuto';
import CalculatorCardLoader from '../ui/CalculatorCardLoader';
import CalculatorCardPackage from '../ui/CalculatorCardPackage';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setToggleOrderModal } from '../../redux/slices/modals/modalsSlice';
import OrderModal from '../ui/OrderModal';

export default function CalculatorPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const serviceData = useAppSelector((state) => state.loaderPackAuto.services);
  console.log(serviceData, 'данные с калькулятора из слайса c calculatorPage');
  console.log(typeof serviceData.machine, 'тип данных для типа машины');
  console.log(serviceData.machine, 'значение для типа машины');

// работает !!!!!!!!!!!!!!!!!!!
const calculateTotalCost = (serviceData) => {
  let totalCost = 0;
  if (typeof serviceData.amountLoader === 'number' && !isNaN(serviceData.amountLoader) &&
      typeof serviceData.workTime === 'number' && !isNaN(serviceData.workTime)) {
      totalCost += serviceData.amountLoader * serviceData.workTime * 1000;
  }
  if (typeof serviceData.box === 'number' && !isNaN(serviceData.box)) {
      totalCost += serviceData.box * 50;
  }
  if (typeof serviceData.roll === 'number' && !isNaN(serviceData.roll)) {
      totalCost += serviceData.roll * 100;
  }
  if (typeof serviceData.scotch === 'number' && !isNaN(serviceData.scotch)) {
      totalCost += serviceData.scotch * 150;
  }
  if (typeof serviceData.stretchRoll === 'number' && !isNaN(serviceData.stretchRoll)) {
      totalCost += serviceData.stretchRoll * 200;
  }
  let totalMachines = 0;
    if (typeof serviceData.amountMachine === 'number' && !isNaN(serviceData.amountMachine) &&
        typeof serviceData.time === 'number' && !isNaN(serviceData.time) &&
        typeof serviceData.machine === 'number' && !isNaN(serviceData.machine)) {
        totalMachines = serviceData.amountMachine * serviceData.time * 500 + (serviceData.path || 0) * 70 + serviceData.amountMachine * serviceData.machine;
    }

    return totalCost + totalMachines;
};
const totalCost = calculateTotalCost(serviceData);
// работает !!!!!!!!!!!!!!!!!!!



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
            {totalCost} рублей
          </Typography>
        </Box>
        <OrderModal />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            void dispatch(setToggleOrderModal(true));
          }}
        >
          Отправить заявку
        </Button>
      </Box>
    </Box>
  );
}
