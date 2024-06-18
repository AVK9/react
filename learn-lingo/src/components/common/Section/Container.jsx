import styled from '@emotion/styled';

const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${props => props.bg || 'transparent'};
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1440px;
    max-width: 1440px;
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const Container = props => {
  return <Box className="container" {...props} />;
};
