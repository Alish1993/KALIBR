import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';

export default function CalculatorCardAuto(): JSX.Element {
  return (
    <Card variant="outlined" sx={{ Width: '90%', margin: '10px' }}>
      <Box sx={{ display: 'flex', paddingX: 2 }}>
        {/* Левая часть */}
        <Box sx={{ flex: '1 0 33%' }}>
          <Typography gutterBottom variant="h5" component="div">
            Грузовые автомобили
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalShippingRoundedIcon sx={{ marginRight: 1 }} />
            {/* Изображение вставлено здесь */}
          </Box>
          <Typography color="text.secondary" variant="body2">
            Самые вместительные и быстрые
          </Typography>
        </Box>
        {/* Вертикальная черта-разделитель */}
        <Divider orientation="vertical" flexItem />
        {/* Правая часть */}
        <Box sx={{ flex: '2 0 66%', paddingLeft: 2 }}>
          <Typography gutterBottom variant="body2">
            Select type
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label="Soft" size="small" />
            <Chip label="Medium" size="small" />
            <Chip label="Hard" size="small" />
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}