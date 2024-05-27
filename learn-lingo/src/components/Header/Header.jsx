import { Link } from 'react-router-dom';
import {
  Name,
  HeaderContainer,
  Navigation,
  BoxLogo,
  StyledLink,
  Login,
  RegisterBox,
} from './Header.styled';
import { Section } from 'components/common/Section/Section';
import logo from '../../assets/img/logo.svg';
import { HOME_ROUTE, TEACHERS_ROUTE } from 'utils/const';
import { Button } from 'components/common/Button';
import { IconSvg } from 'components/common/IconSvg';
import { theme } from 'assets/styles';
export const Header = () => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <BoxLogo>
          <img width={28} height={28} src={logo} alt="Learn Lingo" />
          <Name>LearnLingo</Name>
        </BoxLogo>
      </Link>

      <div>
        <Navigation>
          <StyledLink to={HOME_ROUTE}>Home</StyledLink>
          <StyledLink to={TEACHERS_ROUTE}>Teachers</StyledLink>
        </Navigation>
      </div>
      <RegisterBox>
        <Login>
          <IconSvg icon="login" size="20px" />
          Log in
        </Login>
        <Button
          background="black"
          backgroundHover={theme.colors.primary}
          margin="0"
        >
          Registration
        </Button>
      </RegisterBox>
    </HeaderContainer>
  );
};
