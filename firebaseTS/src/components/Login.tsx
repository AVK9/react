import React from 'react';

import { setUser } from 'store/slices/userSlice';
import { Form } from './Form';
import { LoginWithGoogle } from './LoginWithGoogle';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Container, Grid } from '@mui/material';
import { useAppDispatch } from 'hooks/redux-hooks';

export const Login = () => {
  const dispatch = useAppDispatch();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      })
      .catch(() => alert('Invalid user'));
  };

  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50,
          justifyContent: 'center',
        }}
        alignItems={'center'}
        justify={'center'}
      >
        <Grid
          style={{
            width: 400,
            background: '#fafafa',
            borderRadius: 20,
          }}
          container
          alignItems={'center'}
          direction={'column'}
          padding={1}
        >
          <Form title="Sign in" handleClick={handleLogin} />
          <Box>
            <LoginWithGoogle />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
