import styled from 'styled-components';
import sprite from '../../assets/img/sprite.svg';

const IconWrapper = styled.svg`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  margin-left: ${props => props.ml || '0px'};
  margin-right: ${props => props.mr || '0px'};
  /* stroke-width: 1.5px; */
  stroke: ${props => props.stroke || 'transparent'};
  fill: ${props => props.fill || 'transparent'};
`;

export const IconSvg = props => {
  const { icon } = props;
  return (
    <IconWrapper {...props}>
      <use href={`${sprite}#icon-${icon}`} />
    </IconWrapper>
  );
};
