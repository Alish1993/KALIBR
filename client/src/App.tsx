import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './components/pages/MainPage';

import LoginPage from './components/pages/LoginPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkUserThunk } from './redux/slices/auth/authThunks';
import Root from './components/ui/Root';
import Loader from './components/hocs/Loader';
import AdminPage from './components/pages/AdminPage';
import ManagerPage from './components/pages/ManagerPage';
import CalculatorPage from './components/pages/CalculatorPage';
import PrivateRouter from './components/hocs/PrivateRouter';
import ContactPage from './components/pages/ContactPage';
import PricePage from './components/pages/PricePage';
import ServicePage from './components/pages/ServicePage';



function App(): JSX.Element {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',

          element: <MainPage/>,
        },

  return <RouterProvider router={routes} />;

        {
          path: '/loginPage',
          element: <LoginPage/>,
        },
        {
          path: '/calculatorPage',
          element: <CalculatorPage/>,
        },
        {
          path: '/contactPage',
          element: <ContactPage/>,
        },
        {
          path: '/pricePage',
          element: <PricePage/>,
        },
        {
          path: '/servicePage',
          element: <ServicePage/>,
        },
        {
          element: <PrivateRouter isAllowed={user.status === 'logged'} />,
          children: [
            {
              path: '/adminPage',
              element: <AdminPage/>,
            },
            {
              path: '/managerPage',
              element: <ManagerPage />,
            },
          ],
        },
        

      ],
    },
  ]);

  return (
  
      <RouterProvider router={routes} />


  );

}

export default App;
