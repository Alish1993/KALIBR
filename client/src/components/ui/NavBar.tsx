import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Link, Avatar, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const linkStyle = { color: 'white', marginRight: 10, textDecoration: 'none' };
const typographyStyle = { color: 'black', fontSize: '1.5rem' }; // Увеличиваем размер шрифта названия

export default function Navbar(): JSX.Element {
  const links = [
    { to: '/', name: 'Main' },
    { to: '/calculatorPage', name: 'Calculator' },
    { to: '/signin', name: 'Login' },
    { to: '/contactPage', name: 'Contact' },
    { to: '/pricePage', name: 'Price' },
    { to: '/servicePage', name: 'Service' },
  ];

  const theme = useTheme(); // Используем хук useTheme для получения текущей темы

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', width: '100%', borderRadius: '20px' }}
      >
        <Toolbar>
          {links.map((link) => (
            <Link key={link.name} component={NavLink} to={link.to} sx={linkStyle}>
              <Typography variant="h1" component="div" sx={typographyStyle}>
                {link.name}
              </Typography>
            </Link>
          ))}
          {/* В зависимости от текущей темы отображаем соответствующую иконку */}
          {theme.palette.mode === 'light' ? (
            <IconButton sx={{ color: 'black', width: 100, height: 300 }}>
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton sx={{ color: 'black', width: 100, height: 300 }}>
              <DarkModeIcon />
            </IconButton>
          )}
          <Avatar alt="My Avatar" src="photo_5341680620679583453_y.jpg" sx={{ width: 100, height: 100 }} /> {/* Увеличиваем размер аватара */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
