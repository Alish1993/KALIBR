import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './compaents/ui/Root';
import MainPage from './compaents/pages/MainPage';

function App(): JSX.Element {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
