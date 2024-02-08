import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import NavBar from './NavBar';

export default function Root(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <Box mt={2}>
        <Outlet />
      </Box>
    </Container>
  );
}
