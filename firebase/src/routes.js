
import {Login, Chat} from "./components";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/const";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]