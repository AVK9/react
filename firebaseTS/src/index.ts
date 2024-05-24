import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { auth, firestore } from './services/firebase';
import firebase from 'firebase/compat/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import './services/firebase';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Context.Provider
          value={{
            firebase,
            auth,
            firestore,
          }}
        >
          <Global styles={GlobalStyles} />
          <App />
        </Context.Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
