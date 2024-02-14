import React from 'react';
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
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();

  const links = [
    { to: '/', name: 'Main' },
    { to: '/calculatorPage', name: 'Calculator' },
    { to: '/signin', name: 'Login' },
    { to: '/contactPage', name: 'Contact' },
    { to: '/pricePage', name: 'Price' },
    { to: '/manager', name: 'Manager' },
  ];

  return (
    <Box sx={{ flexGrow: 1, top: 0, width: '0.0001%', zIndex: 1000 }}>
      <AppBar position="static" sx={{ borderRadius: '20px' }}>
        <Toolbar>
          {links.map((link) => (
            <Link key={link.name} component={NavLink} to={link.to} sx={linkStyle}>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  ...typographyStyle,
                  color: theme.palette.mode === 'dark' ? 'white' : 'black',
                }}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
          {/* <Link component={NavLink} to='/' sx={linkStyle}>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  ...typographyStyle,
                  color: theme.palette.mode === 'dark' ? 'white' : 'black',
                }}
              >
                SignOut
              </Typography>
            </Link> */}
          <Button  onClick={() => void dispatch(signOutThunk())}>
              Sign Out
            </Button>


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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

