import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Link, Avatar } from '@mui/material';
import MyAvatar from './MyAvatar.jpg';

const linkStyle = { color: 'white', marginRight: 10, textDecoration: 'none' }; // Исправлено mr на marginRight
const typographyStyle = { color: 'black' }; // Стиль для черного шрифта

export default function Navbar(): JSX.Element {
  const links = [
    { to: '/', name: 'Main' },
    { to: '/calculatorPage', name: 'Calculator' },
    { to: '/signin', name: 'Login' },
    { to: '/contactPage', name: 'Contact' },
    { to: '/pricePage', name: 'Price' },
    { to: '/servicePage', name: 'Service' },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', width: '100%' }}>
        <Toolbar>
          {links.map((link) => (
            <Link key={link.name} component={NavLink} to={link.to} sx={linkStyle}>
              <Typography variant="h6" component="div" sx={typographyStyle}>
                {link.name}
              </Typography>
            </Link>
          ))}
          <Avatar alt="My Avatar" src="photo_5341680620679583453_y.jpg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}


