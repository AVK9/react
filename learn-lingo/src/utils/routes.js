import { HomePage } from 'pages/HomePage/HomePage';
import { FAVORITES_ROUTE, HOME_ROUTE, TEACHERS_ROUTE } from './const';
import { TeachersPage } from 'pages/TeachersPage/TeachersPage';
import { FavoritesPage } from 'pages/Favorites/FavoritesPage';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: TEACHERS_ROUTE,
    Component: TeachersPage,
  },
];

export const privateRoutes = [
  {
    path: FAVORITES_ROUTE,
    Component: FavoritesPage,
  },
];
