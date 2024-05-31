import { lazy } from 'react';
import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  NOTFAUND_ROUTE,
  TEACHERS_ROUTE,
} from './const';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const FavoritesPage = lazy(() => import('pages/Favorites/FavoritesPage'));
const TeachersPage = lazy(() => import('pages/TeachersPage/TeachersPage'));
const NotFaund = lazy(() => import('pages/404/404'));

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: TEACHERS_ROUTE,
    Component: TeachersPage,
  },
  {
    path: NOTFAUND_ROUTE,
    Component: NotFaund,
  },
];

export const privateRoutes = [
  {
    path: FAVORITES_ROUTE,
    Component: FavoritesPage,
  },
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: TEACHERS_ROUTE,
    Component: TeachersPage,
  },
  {
    path: NOTFAUND_ROUTE,
    Component: NotFaund,
  },
];
