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

const HeaderMob = ({ showHeaderMobile, setShowHeaderMobile }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [isOpen, setIsOpen] = useState(false);
  const [isReg, setIsReg] = useState(false);

  const handleClose = () => setIsOpen(false);

  // if (!showHeaderMobile) return null;

  const openModalReg = () => {
    setIsOpen(true);
    setIsReg(true);
    setShowHeaderMobile(false);
  };
  const openModalLog = () => {
    setIsOpen(true);
    setIsReg(false);
    setShowHeaderMobile(false);
  };
  const onClose = () => setIsOpen(false);

  return (
    <>
      <HeaderMobileBox
        className={showHeaderMobile ? 'menu showHeaderMobile' : 'menu'}
      >
        <div>
          <NavMob>
            <StyledLink
              to={HOME_ROUTE}
              onClick={() => {
                setShowHeaderMobile(false);
              }}
            >
              Home
            </StyledLink>
            <StyledLink
              to={TEACHERS_ROUTE}
              onClick={() => {
                setShowHeaderMobile(false);
              }}
            >
              Teachers
            </StyledLink>
            {user && (
              <StyledLink
                to={FAVORITES_ROUTE}
                onClick={() => {
                  setShowHeaderMobile(false);
                }}
              >
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

export default HeaderMob;
