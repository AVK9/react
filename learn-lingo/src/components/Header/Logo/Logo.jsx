import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import { BoxLogo, Name } from './Logo.styled';

const Logo = () => {
  return (
    <Link to={'/'}>
      <BoxLogo>
        <img width={28} height={28} src={logo} alt="Learn Lingo" />
        <Name>LearnLingo</Name>
      </BoxLogo>
    </Link>
  );
};

export default Logo;
