import ReactDOM from 'react-dom';
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
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ModalContent } from 'components/Modal/ModalContent';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReg, setIsReg] = useState(false);

  const openModalReg = () => {
    setIsOpen(true);
    setIsReg(true);
  };
  const openModalLog = () => {
    setIsOpen(true);
    setIsReg(false);
  };
  const closeModal = () => setIsOpen(false);

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
        <Login onClick={openModalLog}>
          <IconSvg icon="login" size="20px" />
          Log in
        </Login>
        <Button
          type="button"
          onClick={openModalReg}
          background="black"
          backgroundHover={theme.colors.primary}
          margin="0"
        >
          Registration
        </Button>
        <Button
          type="button"
          background="black"
          backgroundHover={theme.colors.primary}
          margin="0"
        >
          Log Out
        </Button>
      </RegisterBox>
      {ReactDOM.createPortal(
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalContent isReg={isReg} />
        </Modal>,
        document.getElementById('modal-root')
      )}
    </HeaderContainer>
  );
};
