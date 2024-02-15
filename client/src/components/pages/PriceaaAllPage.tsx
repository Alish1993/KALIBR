import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name: string, price: string, time: string, bid: string) {
  return { name, price, time, bid };
}

const rows = [
  createData('Грузчики (погрузочно-разгрузочные работы)', '400-450', '4', '1600-1800 ₽'),
  createData('Упаковщики (упаковка мебели и вещей)', '400-450', '4', '1600-1800 ₽'),
  createData('Сборщики (разборка - сборка мебели)', '400-450', '4', '1800-2000 ₽'),
  createData('Такелажники (такелажные работы)', '500-700', '4', '2000-2800 ₽'),
];

const rows2 = [
  createData('Картонный короб', '600/400/400 мм.', '1', '160 ₽'),
  createData('Пузырчатая пленка', '50 м.', '1', '1500 ₽'),
  createData('Стрейч-пленка', '450 мм./200 м.', '1', '1500 ₽'),
  createData('Скотч', '50 мм./65 м.', '1', '200 ₽'),
];

export default function PriceAllPage(): JSX.Element {
  return (
    <div>
      <TableContainer component={Paper}>
        <Typography
          variant="h1"
          style={{ textAlign: 'center', marginTop: '70px', marginBottom: '70px' }}
        >
          Цены на услуги
        </Typography>
        <Typography style={{ textAlign: 'center', marginTop: '70px', marginBottom: '70px' }}>
          Узнать расценки по необходимым услугам Вы можете, ознакомившись с тарифами на этой
          странице. При необходимости провести точный расчёт Вам поможет наш специалист-консультант,
          после предоставления полной информации о заказе. Обращайтесь по контактным телефонам +7
          (963) 967-35-34, +7 (977) 326-09-90 , закажите обратный звонок или оставьте заявку и
          получите подробную консультацию!
        </Typography>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Виды выполняемых работ при переезде</StyledTableCell>
              <StyledTableCell align="right">Стоимость 1 часа работы, руб.</StyledTableCell>
              <StyledTableCell align="right">Минимальное время работы, ч.</StyledTableCell>
              <StyledTableCell align="right">Стоимость, руб.</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                <StyledTableCell align="right">{row.bid}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, marginTop: '100px' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Виды материалов</StyledTableCell>
              <StyledTableCell align="right">Размер, мм, м.</StyledTableCell>
              <StyledTableCell align="right">Количество, шт, рул.</StyledTableCell>
              <StyledTableCell align="right">Стоимость, руб.</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                <StyledTableCell align="right">{row.bid}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
