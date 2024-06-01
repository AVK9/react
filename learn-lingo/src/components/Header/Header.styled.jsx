import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'assets/styles';

export const HeaderContainer = styled.div`
  margin-top: 20px;
  height: 48px;

  padding: 10px 0px 10px 0px;
  /* margin: 20px auto; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.menu}) {
    justify-content: space-between;
  }
`;
export const BoxLogo = styled.div`
  border-radius: 15px;
  display: flex;
  align-content: center;
  align-items: center;
  gap: 8px;
  width: 133px;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const Name = styled.span`
  width: 100px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #121417;
  transition: color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    color: ${props => props.color || theme.colors.primary};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.menu}) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  &:hover {
    color: var(--primary);
  }
  &.active {
    color: var(--primary);
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

  @media (max-width: ${({ theme }) => theme.breakpoints.menu}) {
    display: none;
  }
`;
export const ButtonMenu = styled.button`
  @media (min-width: ${({ theme }) => theme.breakpoints.menuX}) {
    display: none;
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
  z-index: 1000;
  opacity: ${props => (props.showHeaderMobile ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.menu}) {
    display: none;
  }
`;
export const NavMob = styled.nav`
  /* width: 138px; */
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
