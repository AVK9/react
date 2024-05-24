import { Container, Grid } from '@mui/material';
import { SignUp } from 'components';
import { Register } from 'components/Register';


export const RegisterPage = () => {
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
          <SignUp />
          <Register />
        </Grid>
      </Grid>
    </Container>
  );
};
