import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  gap: ${props => props.gap || '0'};
  margin: ${({ margin }) => margin || '0'};
  margin-top: ${props => props.mt || '0px'};
  margin-bottom: ${props => props.mb || '0px'};
`;
export const Flex = props => {
  return <StyledFlex {...props} />;
};
