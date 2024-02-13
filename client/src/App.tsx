import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, Button, CssBaseline } from '@mui/material';
import MainPage from './components/pages/MainPage';
import SignInPage from './components/pages/SignInPage';
import Root from './components/ui/Root';
import CalculatorPage from './components/pages/CalculatorPage';
import ContactPage from './components/pages/ContactPage';
import PricePage from './components/pages/PricePage';
import AvatarModal from './components/ui/AvatarModal';
import Loader from './components/hocs/Loader';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkUserThunk } from './redux/slices/auth/authThunks';
import ManagerPage from './components/pages/ManagerPage';

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
  const dispatch = useAppDispatch()
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
          <AvatarModal />
          <CssBaseline />
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? 'Переключить на дневной режим' : 'Переключить на ночной режим'}
          </Button>
          <Router>
            <Routes>
              <Route path="/" element={<Root />}>
                <Route index element={<MainPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/calculatorPage" element={<CalculatorPage />} />
                <Route path="/contactPage" element={<ContactPage />} />
                <Route path="/pricePage" element={<PricePage />} />
                <Route path="/manager" element={<ManagerPage />} />
              </Route>
            </Routes>
          </Router>
        </>
      </Loader>
    </ThemeProvider>
  );
}
