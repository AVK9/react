import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from './../utils/const';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';

export const Navbar = () => {
  const { auth } = React.useContext(Context);
  const [user] = useAuthState(auth);

  const dispatch = useDispatch();

  const logout = () => {
    auth.signOut();
    dispatch(removeUser());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <NavLink to={HOME_ROUTE}>Home</NavLink>
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <NavLink>
                <Button
                  onClick={logout}
                  variant={'text'}
                  style={{ color: '#fff' }}
                >
                  Logout
                </Button>
              </NavLink>
            ) : (
              <>
                <NavLink to={LOGIN_ROUTE}>
                  <Button variant={'text'} style={{ color: '#fff' }}>
                    Login
                  </Button>
                </NavLink>
                <NavLink to={REGISTER_ROUTE}>
                  <Button variant={'text'} style={{ color: '#fff' }}>
                    Register
                  </Button>
                </NavLink>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
