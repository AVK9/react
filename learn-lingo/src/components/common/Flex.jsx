import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  gap: ${props => props.gap || '0'};
  margin: ${props => props.m || '0'};
  padding: ${props => props.p || '0'};
  height: ${props => props.h || '100%'};
  width: ${props => props.w || '100%'};
`;
export const Flex = props => {
  return <StyledFlex {...props} />;
};
