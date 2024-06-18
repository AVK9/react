import styled from '@emotion/styled';

const Container = styled.section`
  background-color: ${props => props.bg || 'transparent'};
`;

export const Section = props => {
  return <Container {...props} />;
};
