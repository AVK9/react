import styled from 'styled-components';

export const BoxMode = styled.div`
  margin-top: 24px;
  padding: 40px;
  margin-bottom: 32px;
  border: 1.5px dashed var(--primary);
  border-radius: 30px;
  max-width: 1312px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 40px 100px;
    flex-wrap: wrap;
  }
`;

export const AdvantageCount = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 28px;
  line-height: 114%;
  letter-spacing: -0.02em;
  color: var(--text);
`;
export const Advantage = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: var(--text-gray);
`;
export const Item = styled.div`
  width: 217px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
