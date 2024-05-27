import styled from 'styled-components';
import sprite from '../../assets/img/sprite.svg';

const IconWrapper = styled.svg`
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '20px'};
  stroke-width: 1.5px;
  stroke: ${props => props.color || '#101828'};
  fill: ${props => props.color || '#ffffff'};
`;

export const IconButton = props => {
  const { icon } = props;
  return (
    <IconWrapper {...props}>
      <use href={`${sprite}#icon-${icon}`} />
    </IconWrapper>
  );
};
