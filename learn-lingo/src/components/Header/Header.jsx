import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  HeaderContainer,
  RegisterBox,
  ButtonMenu,
  Navigation,
  Blur,
  DecorLine,
  Box,
} from './Header.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Modal } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import AuthControl from './AuthControl/AuthControl';
import HeaderMob from './HeaderMob';
import { useTheme } from 'styled-components';
import { useColor } from 'hooks/use-color';
import { colorTheme } from 'utils/const';
import SelectTheme from 'components/common/SelectTheme';
import Burger from 'components/common/Burger';

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

  const [showHeaderMobile, setShowHeaderMobile] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    const BlurOn = () => {
      if (showHeaderMobile) {
        setTimeout(() => {
          setIsBlur(true);
        }, 400);
      } else {
        setTimeout(() => {
          setIsBlur(false);
        }, 400);
      }
    };
    BlurOn();
  }, [showHeaderMobile]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      setShowHeaderMobile(false);
    }
  };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setShowHeaderMobile(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showHeaderMobile]);
  ///////////////////////
  const theme = useTheme();
  const breakpointMenuL = parseInt(
    theme.breakpoints.menuL.replace('px', ''),
    10
  );

  const [isMenuL, setIsMenuL] = useState(window.innerWidth >= breakpointMenuL);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuL(window.innerWidth >= breakpointMenuL);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpointMenuL]);

  useEffect(() => {
    const updateBodyStyles = () => {
      if (showHeaderMobile && !isMenuL) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = `0px`;
      }
    };

    updateBodyStyles();

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = `0px`;
    };
  }, [showHeaderMobile, isMenuL]);

  const { isTheme, setIsTheme } = useColor();

  const handleChange = e => {
    const { value } = e.target;
    setIsTheme(value.toLowerCase());
  };

  return (
    <Box>
      <HeaderContainer>
        <Logo />
        <Navigation>
          <Nav />
        </Navigation>
        <SelectTheme name="colors" data={colorTheme} onChange={handleChange} />
        <ButtonMenu
          type="button"
          onClick={() => {
            setShowHeaderMobile(!showHeaderMobile);
          }}
        >
          {!showHeaderMobile && <Burger />}
          <IconSvg
            icon={showHeaderMobile ? 'x' : ''}
            stroke={showHeaderMobile ? 'black' : 'transparent'}
            fill="black"
            size="25px"
          />
        </ButtonMenu>
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
      <HeaderMob
        showHeaderMobile={showHeaderMobile}
        setShowHeaderMobile={setShowHeaderMobile}
      />
      {isBlur && <Blur className="blur" onClick={handleBackdropClick} />}
      <DecorLine />
    </Box>
  );
};
