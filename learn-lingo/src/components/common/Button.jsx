import { theme } from 'assets/styles';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #fff;

  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;

  margin: ${({ margin }) => margin || '20px 0px 0px 0px'};
  color: ${props => props.color || 'white'};
  background: ${props => props.background || theme.colors.primary};

  background: ${({ theme }) => theme.animation.cubicBezier};
  box-shadow: ${({ theme }) => theme.shadows.small};

  transition: background ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    background: ${props => props.backgroundHover || theme.colors.primaryActiv};
  }

  align-self: ${props => props.align || 'stretch'};

  ${props =>
    props.loadmore &&
    css`
      border: 1px solid rgba(71, 84, 103, 0.2);
      padding: 16px 32px;
      background-color: ${({ theme }) => theme.colors.inputs};
      color: #101828;
      transition: border ${({ theme }) => theme.animation.cubicBezier};

      &:hover {
        border: 1px solid var(--button);
        background: #f2f4f7;
        outline: none;
      }
    `}

  &.load {
    border: 1px solid rgba(71, 84, 103, 0.2);
    padding: 16px 32px;
    width: 145px;
    background-color: ${({ theme }) => theme.colors.inputs};
    color: #101828;

    &:hover {
      border: 1px solid var(--button);
      background: #f2f4f7;
      outline: none;
    }
  }

  ${props =>
    props.next &&
    css`
      padding: 0;
      margin: 0;
      width: 24px;
      height: 24px;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        background-color: transparent;
        outline: none;
        box-shadow: none;
      }
    `}
`;

// const LargeStyledButton = styled(StyledButton)`
//   font-size: 32px;
// `;

export const Button = props => {
  return <StyledButton {...props} />;
};
