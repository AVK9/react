import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { Global, theme } from './assets/styles';
import { auth, firestore } from './services/firebase';
import firebase from 'firebase/compat/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import './services/firebase';
import './assets/styles/stiles.scss';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Context.Provider
          value={{
            firebase,
            auth,
            firestore,
          }}
        >
          <Global />
          <App />
        </Context.Provider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
