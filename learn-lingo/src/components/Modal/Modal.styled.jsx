import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.open ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  z-index: 1000;
`;

export const Popup = styled.div`
  z-index: 1001;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  opacity: ${props => (props.open ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;

  border-radius: 20px;
  padding: 20px;
  width: 80%;
  max-width: 566px;
  max-height: 80%;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* background-color: var(--primary); */
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: background ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:active {
    background: rgba(180, 180, 180, 0.1);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const P = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const TeacherPhoto = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;
export const YourTeacher = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
`;
export const NameTeacher = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`;
