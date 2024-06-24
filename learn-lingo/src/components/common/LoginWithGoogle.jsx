import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import GoogleIcon from '@mui/icons-material/Google';
import { Context } from 'index';
import { Button } from './Button';

export const LoginWithGoogle = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // const { user } = await auth.signInWithPopup(provider);
    // console.log(user);

    // Створюємо новий провайдер для Google аутентифікації
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      // Використовуємо метод signInWithPopup для авторизації
      const { user } = await firebase.auth().signInWithPopup(provider);

      // Виводимо інформацію про користувача в консоль
      console.log(user);
    } catch (error) {
      // Обробляємо можливі помилки
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <>
      <Button onClick={login} google="true">
        <GoogleIcon sx={{ fontSize: 30 }} style={{ paddingRight: 5 }} />
        <p>Sign In with Google</p>
      </Button>
    </>
  );
};
