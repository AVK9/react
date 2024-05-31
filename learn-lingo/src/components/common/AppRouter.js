import React, { Suspense, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../../utils/routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NOTFAUND_ROUTE } from 'utils/const';
import { Context } from 'index';
import { Layout } from 'Layout/Layout';

export const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const renderRoute = route => (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <route.Component />
        </Suspense>
      }
    />
  );

  return (
    <Routes>
      <Route element={<Layout />}>
        {user ? (
          <>
            {privateRoutes.map(renderRoute)}
            <Route
              path="*"
              element={<Navigate to={NOTFAUND_ROUTE} replace />}
            />
          </>
        ) : (
          <>
            {publicRoutes.map(renderRoute)}
            <Route
              path="*"
              element={<Navigate to={NOTFAUND_ROUTE} replace />}
            />
          </>
        )}
      </Route>
    </Routes>
  );
};
