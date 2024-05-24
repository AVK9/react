import { RegisterPage } from 'pages/RegisterPage';
import { Chat } from './components';
import {
  CHAT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from './utils/const';
import { LoginPage } from 'pages/LoginPage';
import { HomePage } from 'pages/HomePage';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
];
