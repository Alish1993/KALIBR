import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, Button, CssBaseline } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MainPage from './components/pages/MainPage';
import Root from './components/ui/Root';
import CalculatorPage from './components/pages/CalculatorPage';
import ContactPage from './components/pages/ContactPage';

import AvatarModal from './components/ui/AvatarModal';
import Loader from './components/hocs/Loader';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkUserThunk } from './redux/slices/auth/authThunks';
import ManagerPage from './components/pages/ManagerPage';
import SignInModal from './components/ui/SignInModal';
import PriceaaAllPage from './components/pages/PriceaaAllPage';
import ServicePage from './components/pages/ServicePage';
import CreateUserModal from './components/ui/CreateUserModal';
import AdminPage from './components/pages/AdminPage';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    void dispatch(checkUserThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Loader isLoading={user.status === 'pending'}>
        <>
          <CreateUserModal />
          <AvatarModal />
          <SignInModal />
          <CssBaseline />
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? <DarkModeIcon /> : <Brightness7Icon />}
          </Button>
          <Router>
            <Routes>
              <Route path="/" element={<Root />}>
                <Route index element={<MainPage />} />
                <Route path="/calculatorPage" element={<CalculatorPage />} />
                <Route path="/contactPage" element={<ContactPage />} />
                <Route path="/manager" element={<ManagerPage />} />
                <Route path="/priceAllPage" element={<PriceaaAllPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/admin" element={<AdminPage />} />
              </Route>
            </Routes>
          </Router>
        </>
      </Loader>
    </ThemeProvider>
  );
}
