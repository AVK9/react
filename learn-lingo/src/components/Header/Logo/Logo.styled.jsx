import styled from 'styled-components';
import { theme } from 'assets/styles';

export const BoxLogo = styled.div`
  border-radius: 15px;
  display: flex;
  align-content: center;
  align-items: center;
  gap: 8px;
  width: 133px;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
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
