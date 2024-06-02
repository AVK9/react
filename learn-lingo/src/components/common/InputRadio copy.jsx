import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IconSvg } from 'components/common/IconSvg';

const InputBox = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  height: 24px;
  /* background-color: pink; */
`;
const Label = styled.label`
  padding-left: 10px;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: center;

  color: ${props => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};
`;

const Input = styled.input`
  outline: none;
  border: none;

  height: 18px;
  width: 18px;

  z-index: 1;
  opacity: 0;
`;

const IconBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  position: absolute;
  top: 50% -9px;
  left: 0;

  background: ${props => (props.active ? '2px solid #F4C550' : 'transparent')};
  border: ${props =>
    props.active ? '2px solid #F4C550' : '2px solid #636366'};
`;

const IconDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;

  position: absolute;
  top: 3px;
  left: 3px;
  background: ${props => (props.active ? '#F4C550' : 'transparent')};
`;

export const InputRadio = props => {
  const [activeInput, setActiveInput] = useState(null);
  const handleFocus = inputId => {
    setActiveInput(inputId);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  const { type, label, inputId, icon } = props;
  return (
    <InputBox {...props}>
      <Input
        {...props}
        onFocus={() => handleFocus(inputId)}
        onBlur={handleBlur}
        type={type}
        required
      />
      <Label active={activeInput === inputId}>{label}</Label>
      <IconBox active={activeInput === inputId}>
        <IconSvg icon={icon} />
        <IconDot active={activeInput === inputId} />
      </IconBox>
    </InputBox>
  );
};
