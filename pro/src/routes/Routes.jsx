import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import { useAuth } from '../contexts/useAuth';
import Contacts from '../pages/contacts/Contacts';
import Home from '../pages/home/Home';
import Autorize from '../pages/autorize/Autorize';

const Routes = () => {
  const { token } = useAuth();
  const protectedRoutes = [{ path: '/contacts', element: <Contacts /> }];
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Registration /> },
    { path: '/autorize', element: <Autorize /> },
  ];

  const router = createBrowserRouter([
    ...(token ? protectedRoutes : []),
    ...routes,
  ]);

  return (
      <RouterProvider router={router} />
  );
};

export default Routes;
