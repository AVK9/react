import { styled } from 'styled-components';

export const FilterBox = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  max-width: 783px;
  /* height: 74px; */
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.menuS}) {
    flex-direction: row;
  }
`;
