import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import GoogleIcon from '@mui/icons-material/Google';
import { Context } from 'index';
import { Button } from './Button';

export const LoginWithGoogle = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
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
