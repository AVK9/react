import styled, { css } from 'styled-components';

const StyledTitle = styled.h1`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  /* color: var(--main); */
  color: ${props => props.color || '#121417'};
  margin-top: ${props => props.mt || '0px'};
  margin-bottom: ${props => props.mb || '0px'};

  ${props =>
    props.h2 &&
    css`
      font-size: 24px;
      line-height: 133%;
    `}
`;

export const Title = props => {
  return <StyledTitle {...props} />;
};
