import styled from 'styled-components';
import { theme } from 'assets/styles';

export const HeaderContainer = styled.div`
  height: 48px;
  padding: 20px 0px 10px 0px;

  box-shadow: ${({ theme }) => theme.shadows.small};

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileLX}) {
    padding: 10px 34px 10px 34px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.menu}) {
    padding: 10px 64px 10px 64px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.menuM}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.menuM}) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.menuX}) {
    display: none;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
    outline: none;
  }
`;
export const HeaderMobileBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  z-index: 10;
  opacity: ${props => (props.showHeaderMobile ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.menuM}) {
    display: none;
  }
`;
export const NavMob = styled.div`
  /* width: 100%;
  height: 300px; */
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
