import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Link, Avatar, Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  setAvatarModalVisibility,
  setSignInModalVisibility,
} from '../../redux/slices/modals/modalsSlice';
import { signOutThunk } from '../../redux/slices/auth/authThunks';

const linkStyle = {
  color: 'white',
  marginRight: 10,
  textDecoration: 'none',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};
const typographyStyle = { fontSize: '1.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' };

export default function Navbar(): JSX.Element {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme.palette.mode === 'dark');
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();

  const links = [
    { to: '/', name: 'Main' },
    { to: '/calculatorPage', name: 'Calculator' },
    { to: '/contactPage', name: 'Contact' },
    { to: '/service', name: 'Services' },
    { to: '/priceAllPage', name: 'PraceAll' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box sx={{ flexGrow: 1, top: 0, zIndex: 1000 }}>
      <AppBar position="static" sx={{ borderRadius: '20px', backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <Toolbar>
          {user.status === 'guest' &&
            links.map((link) => (
              <Link key={link.name} component={NavLink} to={link.to} sx={linkStyle}>
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    ...typographyStyle,
                    color: isDarkMode ? 'white' : 'black',
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          {user.status === 'logged' && (
            <>
              <Link component={NavLink} to="/manager" sx={linkStyle}>
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    ...typographyStyle,
                    color: isDarkMode ? 'white' : 'black',
                  }}
                >
                  Orders
                </Typography>
              </Link>
              <Button onClick={() => void dispatch(signOutThunk())} sx={linkStyle}>
                {' '}
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    ...typographyStyle,
                    color: isDarkMode ? 'white' : 'black',
                  }}
                >
                  SignOut
                </Typography>
              </Button>
            </>
          )}

          {user.status === 'logged' ? (
            <Avatar
              alt="My Avatar"
              src={`http://localhost:3001/img/${user.avatar}`}
              sx={{ width: 100, height: 100, marginRight: 3 }}
              onClick={() => {
                void dispatch(setAvatarModalVisibility(true));
              }}
            />
          ) : (
            <Avatar
              alt="My Avatar"
              src="photo_5341680620679583453_y.jpg"
              sx={{ width: 100, height: 100, marginRight: 3 }}
              onClick={() => {
                void dispatch(setSignInModalVisibility(true));
              }}
            />
          )}

          <Button onClick={toggleDarkMode} sx={{ color: isDarkMode ? 'white' : 'black' , borderRadius: '20px' }}>
            {isDarkMode ? 'Light' : 'Dark'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
