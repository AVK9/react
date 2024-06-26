import { createPortal } from 'react-dom';
import { ModalContent } from 'components/Modal/ModalContent';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  HeaderContainerMob,
  HeaderMobileBox,
  NavMob,
  RegisterBoxMob,
} from './Header.styled';
import { IconSvg } from 'components/common/IconSvg';
import { FAVORITES_ROUTE, HOME_ROUTE, TEACHERS_ROUTE } from 'utils/const';
import { Button } from 'components/common/Button';
import Logo from './Logo/Logo';
import { StyledLink } from './Nav/Nav.styled';
import AuthControl from './AuthControl/AuthControl';
import { useContext, useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Context } from 'index';

const HeaderMobile = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [isOpen, setIsOpen] = useState(false);
  const [isReg, setIsReg] = useState(false);

  // const handleClose = () => {
  //   setShowHeaderMobile(false);
  // };

  if (!isOpen) return null;

  const openModalReg = () => {
    setIsOpen(true);
    setIsReg(true);
  };
  const openModalLog = () => {
    setIsOpen(true);
    setIsReg(false);
  };
  const onClose = () => setIsOpen(false);

  return (
    <>
      <HeaderMobileBox>
        <div>
          <NavMob>
            <StyledLink to={HOME_ROUTE} onClick={onClose}>
              Home
            </StyledLink>
            <StyledLink to={TEACHERS_ROUTE} onClick={onClose}>
              Teachers
            </StyledLink>
            {user && (
              <StyledLink to={FAVORITES_ROUTE} onClick={onClose}>
                Favorites
              </StyledLink>
            )}
          </NavMob>
        </div>
        <RegisterBoxMob>
          <AuthControl
            openModalLog={openModalLog}
            openModalReg={openModalReg}
            handleClose={onClose}
          />
        </RegisterBoxMob>
      </HeaderMobileBox>
      {createPortal(
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent isReg={isReg} />
        </Modal>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default HeaderMobile;
