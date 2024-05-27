import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

export const ModalW = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #2f2f2f;

  background: #fff;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.8s ease-in-out;

  border-radius: 20px;
  padding: 40px;
  width: 982px;
  height: 720px;

  /* @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
    top: 50%;
    transform: translate(-50%, -50%);
  } */
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  background: transparent;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    background: rgba(21, 26, 29, 0.1);
    border-radius: 50%;
    transition: background ${({ theme }) => theme.animation.cubicBezier};
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const Name = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`;
export const PriceBox = styled.div`
  margin-top: 16px;
`;
export const Price = styled.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 16px;
`;
export const TextItem = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`;
export const TextItemLoc = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`;
export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PrePhoto = styled.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  background-image: url(${(props) => props.gallery});
  background-size: cover;
  background-position: center;
`;
export const PhotoBox = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`;

export const DescriptionBox = styled.div`
  width: 100%;
  margin-top: 24px;
`;
export const Description = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`;
export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};
  stroke-width: 2.3px;
  stroke: ${(props) => props.color || '#101828'};
  fill: ${(props) => props.color || '#ffffff'};
`;

export const TabBox = styled.div`
  margin-top: 44px;
`;
export const TabHead = styled.div`
  display: flex;
  gap: 40px;
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`;
export const TabName = styled.div`
  height: 48px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
  cursor: pointer;
  /* &:focus,
  &:active {
    border-bottom: 4px solid #e44848;
  } */
`;

export const FeaturesTab = styled.div`
  display: flex;
  gap: 24px;
`;
export const InfoBox = styled.div`
  margin-top: 44px;
  width: 430px;
`;
