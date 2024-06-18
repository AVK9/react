import { theme } from 'assets/styles';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${props => props.align || 'stretch'};

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;

  border-radius: 12px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '60px'};

  margin: ${({ margin }) => margin || '20px 0px 0px 0px'};
  color: ${props => props.color || '#121417'};
  background: ${props => props.background || theme.colors.primary};

  background: ${({ theme }) => theme.animation.cubicBezier};
  box-shadow: ${({ theme }) => theme.shadows.small};

  transition: background ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    background: ${props => props.backgroundhover || theme.colors.primaryActiv};
  }
  ${props =>
    props.google &&
    css`
      border: 1px solid rgba(71, 84, 103, 0.2);
      background-color: inherit;
      transition: border ${({ theme }) => theme.animation.cubicBezier};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primaryActiv};
        background: ${({ theme }) => theme.colors.primaryActiv};
        outline: none;
      }
    `}
  ${props =>
    props.simple &&
    css`
      border-radius: 50%;
      width: ${props => props.width || '35px'};
      height: ${props => props.height || '35px'};

      margin: ${({ margin }) => margin || '0px'};
      border: 1px solid rgba(71, 84, 103, 0.2);
      background-color: inherit;
      transition: border ${({ theme }) => theme.animation.cubicBezier};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primaryActiv};
        background: ${({ theme }) => theme.colors.primaryActiv};
        outline: none;
      }
    `}

  ${props =>
    props.login &&
    css`
      color: ${({ theme }) => theme.colors.text};
      background-color: transparent;
      box-shadow: none;
      width: ${props => props.width || 'auto'};

      &:hover {
        border: none;
        background: none;
        outline: none;
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
      ${props =>
    props.more &&
    css`
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      margin: ${({ margin }) => margin || '0px 0px 0px 0px'};
      color: ${({ theme }) => theme.colors.text};
      background-color: transparent;
      box-shadow: none;
      width: ${props => props.width || 'auto'};

      &:hover {
        border: none;
        background: none;
        outline: none;
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

export const Button = props => {
  return <StyledButton {...props} />;
};
