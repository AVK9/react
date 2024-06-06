import { createPortal } from 'react-dom';
import { ModalContent } from 'components/Modal/ModalContent';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  HeaderContainer,
  HeaderMobileBox,
  NavMob,
  RegisterBoxMob,
} from './Header.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Section } from 'components/common/Section/Section';
import { FAVORITES_ROUTE, HOME_ROUTE, TEACHERS_ROUTE } from 'utils/const';
import { Button } from 'components/common/Button';
import Logo from './Logo/Logo';
import { StyledLink } from './Nav/Nav.styled';
import AuthControl from './AuthControl/AuthControl';
import { useContext, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Context } from 'index';

const HeaderMobile = ({ showHeaderMobile, setShowHeaderMobile }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [isOpen, setIsOpen] = useState(false);
  const [isReg, setIsReg] = useState(false);

  const handleClose = () => {
    setShowHeaderMobile(false);
  };

  if (!showHeaderMobile) return null;

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
    <>
      {createPortal(
        <HeaderMobileBox showHeaderMobile={showHeaderMobile}>
          <Section>
            <HeaderContainer>
              <Logo />
              <Button type="button" onClick={handleClose} simple={true}>
                <IconSvg icon="close" stroke="black" />
              </Button>
            </HeaderContainer>
            <div>
              <NavMob>
                <StyledLink to={HOME_ROUTE} onClick={handleClose}>
                  Home
                </StyledLink>
                <StyledLink to={TEACHERS_ROUTE} onClick={handleClose}>
                  Teachers
                </StyledLink>
                {user && (
                  <StyledLink to={FAVORITES_ROUTE} onClick={handleClose}>
                    Favorites
                  </StyledLink>
                )}
              </NavMob>
            </div>
            <RegisterBoxMob>
              <AuthControl
                openModalLog={openModalLog}
                openModalReg={openModalReg}
                handleClose={handleClose}
              />
            </RegisterBoxMob>
          </Section>
        </HeaderMobileBox>,
        document.getElementById('modal-root')
      )}
      {createPortal(
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalContent isReg={isReg} />
        </Modal>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default HeaderMobile;
