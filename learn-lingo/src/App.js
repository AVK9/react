import { Suspense, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Header } from 'components/Header/Header';
import { AppRouter } from './components/common/AppRouter';
import { Context } from 'index';
import { Layout } from 'Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { Router } from 'routes';
import { Route, Routes } from 'react-router-dom';
import { FavoritesPage } from 'pages/Favorites/FavoritesPage';
import { FAVORITES_ROUTE, TEACHERS_ROUTE } from 'utils/const';
import { TeachersPage } from 'pages/TeachersPage/TeachersPage';

export const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      <AppRouter />
    </>
  );
};
// eslint-disable-next-line no-lone-blocks

// return (
//   <Layout>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path={FAVORITES_ROUTE} element={<FavoritesPage />} />
//         <Route path={TEACHERS_ROUTE} element={<TeachersPage />} />
//         <Route path="/write" element={<Write />} />
//         <Route path="/read" element={<Read />} />
//         <Route path="/updateread" element={<UpdateRead />} />
//         <Route path="/updatewrite/:firebaseId" element={<UpdateWrite />} />
//       </Routes>
//     </Router>
//   </Layout>
// );
// };
