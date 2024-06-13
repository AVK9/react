import { theme } from 'assets/styles';
import styled, { css } from 'styled-components';

export const ItemBox = styled.li`
  border-radius: 24px;
  padding: 24px;
  width: 100%;

  background: #fff;
  margin-bottom: 53px;

  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 48px;
  /* background-color: red; */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const ImgBox = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primaryActiv};
  border-radius: 100px;
  width: 120px;
  height: 120px;
  flex-shrink: 0;

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
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* gap: 8px; */
`;
export const InfoBoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  position: relative;
  padding: 0 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    &:not(:first-child)::after {
      content: ' ';
      position: absolute;
      display: flex;
      align-items: center;

      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.2);
    }

    &:after {
      left: 0px;
    }
  }
`;
export const Price = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #38cd3e;
`;
export const InfoTextItem = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`;
export const HeadBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Name = styled.p`
  margin-top: 8px;
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

export const TextSection = styled.div`
  margin-top: 32px;
`;

export const LevelsBox = styled.ul`
  margin-top: 32px;
  display: flex;

  flex-wrap: wrap;
  gap: 8px;
`;

export const Box = styled.div`
  width: 100%;
`;
export const ReadMoreBox = styled.div``;
export const TextReadmore = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`;
export const ReviewsBox = styled.div`
  margin-top: 32px;
`;

export const ReviewsItem = styled.div`
  margin-bottom: 32px;
`;
export const NameReviewer = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-gray);
`;
export const RatingReviewer = styled.div`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: var(--text);

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ImgReviews = styled.img`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`;
export const BoxReviewer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const BoxReviewerInfo = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;
