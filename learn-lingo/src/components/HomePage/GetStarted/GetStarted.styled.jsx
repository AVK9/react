import styled from 'styled-components';

export const UnlockPotential = styled.div`
  margin-top: 20px;
  border-radius: 30px;
  max-width: 720px;
  height: auto;
  padding: 28px 10px 28px 10px;
  /* text-align: left; */

  @media (min-width: ${({ theme }) => theme.breakpoints.menuS}) {
    padding: 96px 108px 98px 64px;
  }

  background: #f8f8f8;
`;
export const P = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 48px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: var(--text);

  margin-top: 98px;
`;
export const Decor = styled.span`
  font-style: italic;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.primaryActiv};
  border-radius: 12px;
  margin-right: 12px;
  margin-left: 12px;
`;
export const Text = styled.p`
  margin-top: 32px;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  letter-spacing: -0.02em;
  color: #121417;
  max-width: 471px;
`;
