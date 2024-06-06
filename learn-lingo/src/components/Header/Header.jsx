import { useState } from 'react';
import { createPortal } from 'react-dom';

import {
  HeaderContainer,
  RegisterBox,
  ButtonMenu,
  Navigation,
} from './Header.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import HeaderMobile from './HeaderMobile';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import AuthControl from './AuthControl/AuthControl';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReg, setIsReg] = useState(false);
  const [showHeaderMobile, setShowHeaderMobile] = useState(false);

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
      <HeaderContainer>
        <Logo />
        <div>
          <Navigation>
            <Nav />
          </Navigation>
          <ButtonMenu type="button" onClick={() => setShowHeaderMobile(true)}>
            <IconSvg icon="menu" store="transparent" fill="black" size="25px" />
          </ButtonMenu>
        </div>
        <RegisterBox>
          <AuthControl
            openModalLog={openModalLog}
            openModalReg={openModalReg}
          />
        </RegisterBox>
        {createPortal(
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalContent isReg={isReg} />
          </Modal>,
          document.getElementById('modal-root')
        )}
      </HeaderContainer>
      <HeaderMobile
        showHeaderMobile={showHeaderMobile}
        setShowHeaderMobile={setShowHeaderMobile}
      />
    </>
  );
};
