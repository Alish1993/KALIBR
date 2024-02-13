import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Link, Avatar, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '@emotion/react';

const linkStyle = { color: 'white', marginRight: 10, textDecoration: 'none', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' };
const typographyStyle = { fontSize: '1.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' };

export default function Navbar(): JSX.Element {
  const { toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, top: 0, width: '0.0001%', zIndex: 1000 }}>
      <AppBar position="static" sx={{ borderRadius: '20px' }}>
        <Toolbar>
          {links.map((link) => (
            <Link key={link.name} component={NavLink} to={link.to} sx={linkStyle}>
              <Typography variant="h1" component="div" sx={{ ...typographyStyle, color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
                {link.name}
              </Typography>
            </Link>
          ))}
          <IconButton
            sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black', width: 100, height: 200 }}
            onClick={toggleTheme}
          >
            {theme.palette.mode === 'light' ? <Brightness7Icon /> : <DarkModeIcon />}
          </IconButton>
          <Avatar
            alt="My Avatar"
            src="photo_5341680620679583453_y.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const links = [
  { to: '/', name: 'Main' },
  { to: '/calculatorPage', name: 'Calculator' },
  { to: '/signin', name: 'Login' },
  { to: '/contactPage', name: 'Contact' },
  { to: '/pricePage', name: 'Price' },
];
