import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from 'utils/const';

export const Register = () => {
  return (
    <Box style={{ textAlign: 'center', marginTop: 5 }}>
      <p>Already have account?</p>
      <Link to={LOGIN_ROUTE}> Login</Link>
    </Box>
  );
};
