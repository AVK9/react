import React from 'react';
import { createPortal } from 'react-dom';
import {
  BoxLogo,
  HeaderContainer,
  HeaderMobileBox,
  Name,
  NavMob,
  StyledLink,
} from './Header.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import { Section } from 'components/common/Section/Section';
import { HOME_ROUTE, TEACHERS_ROUTE } from 'utils/const';
import { Button } from 'components/common/Button';

const HeaderMobile = ({ showHeaderMobile, setShowHeaderMobile }) => {
  const handleClose = () => {
    setShowHeaderMobile(false);
  };

  if (!showHeaderMobile) return null;

  return (
    <>
      {createPortal(
        <HeaderMobileBox showHeaderMobile={showHeaderMobile}>
          <Section>
            <HeaderContainer>
              <Link to={'/'} onClick={handleClose}>
                <BoxLogo>
                  <img width={28} height={28} src={logo} alt="Learn Lingo" />
                  <Name>LearnLingo</Name>
                </BoxLogo>
              </Link>

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
              </NavMob>
            </div>
          </Section>
        </HeaderMobileBox>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default HeaderMobile;
