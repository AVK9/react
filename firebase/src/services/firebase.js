import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB4USYQqA6WFn1vY10TlHSyBeJk-JXRPGw',
  authDomain: 'chat-react-ccfb1.firebaseapp.com',
  projectId: 'chat-react-ccfb1',
  storageBucket: 'chat-react-ccfb1.appspot.com',
  messagingSenderId: '331351493654',
  appId: '1:331351493654:web:fa90e701e224330b4e7937',
  measurementId: 'G-WQ0LQVZXNW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
