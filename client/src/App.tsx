import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import AuthPage from './components/pages/AuthPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkUserThunk } from './redux/slices/auth/authThunks';
import Root from './components/ui/Root';
import CatsPage from './components/pages/CatsPage';
import FavoritesPage from './components/pages/FavoritesPage';
import AuthErrorDialog from './components/ui/AuthErrorDialog';
import EditDialog from './components/ui/EditDialog';
import Loader from './components/hocs/Loader';
import PrivateRouter from './components/hocs/PrivateRouter';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          element: <PrivateRouter isAllowed={user.status === 'logged'} />,
          children: [
            {
              path: '/cats',
              element: <CatsPage />,
            },
            {
              path: '/favorites',
              element: <FavoritesPage />,
            },
          ],
        },
        {
          element: <PrivateRouter isAllowed={user.status === 'guest'} />,
          children: [
            {
              path: '/signup',
              element: <AuthPage />,
            },
            {
              path: '/login',
              element: <AuthPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Loader isLoading={user.status === 'pending'}>
      <RouterProvider router={routes} />
      <AuthErrorDialog /> 
    </Loader>
  );
}

export default App;
