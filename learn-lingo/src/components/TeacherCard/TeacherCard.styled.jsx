import { theme } from 'assets/styles';
import styled, { css } from 'styled-components';

export const ItemBox = styled.li`
  border-radius: 24px;
  padding: 24px;
  width: 100%;
  height: 328px;
  background: #fff;
  margin-bottom: 53px;
`;

export const ImgBox = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primaryActiv};
  border-radius: 100px;
  width: 120px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Img = styled.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`;
export const Ico = styled.div`
  border-radius: 50%;
  border: 3px solid white;
  background-color: #38cd3e;
  width: 12px;
  height: 12px;

  position: absolute;
  top: 17px;
  right: 17px;
`;

export const Name = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: var(--text);
`;

export const TextMain = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-gray);
`;
export const TextU = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--text);
`;
export const Text = styled.span`
  color: var(--text);
`;
