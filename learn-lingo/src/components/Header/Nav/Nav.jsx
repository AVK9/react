import { FAVORITES_ROUTE, HOME_ROUTE, TEACHERS_ROUTE } from 'utils/const';
import { StyledLink } from './Nav.styled';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from 'index';

const Nav = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <>
      <StyledLink to={HOME_ROUTE}>Home</StyledLink>
      <StyledLink to={TEACHERS_ROUTE}>Teachers</StyledLink>
      {user && <StyledLink to={FAVORITES_ROUTE}>Favorites</StyledLink>}
    </>
  );
};

export default Nav;
