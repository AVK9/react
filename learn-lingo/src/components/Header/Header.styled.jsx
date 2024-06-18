import styled, { keyframes } from 'styled-components';
import { theme } from 'assets/styles';

export const HeaderContainer = styled.div`
  height: 48px;
  padding: 20px 0px 10px 0px;
  position: relative;
  z-index: 110;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileLX}) {
    padding: 10px 34px 5px 34px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.menuS}) {
    padding: 10px 64px 10px 64px;
  }
`;
export const DecorLine = styled.div`
  width: 100%;
  height: 5px;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Navigation = styled.nav`
  width: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;

  transition: color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    color: ${props => props.color || theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.menuL}) {
    display: none;
  }
`;

export const Login = styled.button`
  width: 73px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    color: ${props => props.color || theme.colors.primary};
  }
`;
export const RegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.menuL}) {
    display: none;
  }
`;
export const RegisterBoxMob = styled.div`
  text-align: center;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-direction: column;
`;
export const ButtonMenu = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.menuXL}) {
    display: none;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
    outline: none;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const HeaderMobileBox = styled.div`
  position: absolute;
  top: ${({ showHeaderMobile }) => (!showHeaderMobile ? '48px' : '-200%')};
  left: 0;
  z-index: 100;
  padding-bottom: 30px;
  width: 100%;
  background: #ffffff;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* animation: ${({ showHeaderMobile }) =>
    !showHeaderMobile ? slideDown : slideUp}
    1s ease;
  transition: 0.5s; */
  /* box-shadow: ${({ theme }) => theme.shadows.small}; */
  /* transform: translateY(-100%); */
  /* transition: 0.5s;
  transform: translateY
    ${({ showHeaderMobile }) => (showHeaderMobile ? '-100%' : '0%')}; */
  @media (min-width: ${({ theme }) => theme.breakpoints.menuL}) {
    display: none;
  }
  transition: all 0.8s;
`;
export const Blur = styled.div`
  width: 100%;
  height: 100%;
  z-index: 80;
  backdrop-filter: blur(2px);
  position: absolute;
  bottom: 0;
  left: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.menuL}) {
    display: none;
  }
  transition: all 0.8s;
`;

export const NavMob = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;

  transition: color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    color: ${props => props.color || theme.colors.primary};
  }
`;

export const HeaderContainerMob = styled.div`
  height: 58px;
  padding: 20px 20px 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileLX}) {
    padding: 10px 54px 10px 54px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.menuS}) {
    padding: 10px 64px 10px 64px;
  }
`;
