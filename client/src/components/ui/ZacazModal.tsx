import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function RedBar({ key }: { key: React.Key }): JSX.Element {
  return (
    <Box
      key={key}
      sx={{
        height: 10,
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
      }}
    />
  );
}

export default function ZacazModal(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <RedBar key="1" />
      <TextField label="Name" id="margin-none" type="text" />
      <RedBar key="2" />
      <TextField label="Phone" id="margin-dense" margin="dense" type="tel" />
      <RedBar key="3" />
      <TextField label="Email" id="margin-normal" margin="normal" type="email" />
      <RedBar key="4" />
    </Box>
  );
}
