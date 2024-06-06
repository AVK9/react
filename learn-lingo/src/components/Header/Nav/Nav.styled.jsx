import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'assets/styles';

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
