import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'assets/styles';

export const HeaderContainer = styled.div`
  height: 48px;

  padding: 10px 0px 10px 0px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
