import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from './../utils/const';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
export const Navbar = () => {
  const { auth } = React.useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <NavLink>
                <Button onClick={() => auth.signOut()} variant={'outlined'}>
                  Logout
                </Button>
              </NavLink>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={'outlined'}>Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
