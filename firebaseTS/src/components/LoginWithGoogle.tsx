import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import { Context } from '..';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { REGISTER_ROUTE } from 'utils/const';
import GoogleIcon from '@mui/icons-material/Google';


export const LoginWithGoogle = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <>
      <Box>
        <Button color="secondary" onClick={login} variant={'outlined'}>
          <GoogleIcon fontSize="small" style={{ paddingRight: 5 }} />
          <p>Sign In with Google</p>
        </Button>
        <Box style={{ textAlign: 'center', marginTop: 5 }}>
          <Link to={REGISTER_ROUTE}>Register</Link>
        </Box>
      </Box>
    </>
  );
};
