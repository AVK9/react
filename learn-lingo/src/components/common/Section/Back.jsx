import styled from '@emotion/styled';

const Box = styled.section`
  min-height: calc(100vh - 48px);
  width: 100%;
  background-color: ${props => props.bg || 'transparent'};
`;

export const Back = props => {
  return <Box {...props} />;
};
