import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;

  margin: ${({ margin }) => margin || '20px 0px 0px 0px'};
  color: ${props => props.color || 'white'};
  background: ${props => props.background || '#E44848'};

  background-color: ${({ theme }) => theme.animation.cubicBezier};
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background: #d84343;
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.small};
  }

  align-self: ${props => props.align || 'stretch'};

  ${props =>
    props.loadmore &&
    css`
      border: 1px solid rgba(71, 84, 103, 0.2);
      padding: 16px 32px;
      background-color: ${({ theme }) => theme.colors.inputs};
      color: #101828;

      &:hover {
        border: 1px solid var(--button);
        background: #f2f4f7;
        outline: none;
        transition: border ${({ theme }) => theme.animation.cubicBezier};
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
