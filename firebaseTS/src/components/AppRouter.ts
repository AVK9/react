import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/const';
import { privateRoutes, publicRoutes } from '../routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

export const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
};
