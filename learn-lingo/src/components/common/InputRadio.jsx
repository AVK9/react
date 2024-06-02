import { Controller } from 'react-hook-form';
import styled from 'styled-components';

const InputBox = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  height: 24px;
`;
const Label = styled.label`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: left;

  width: 90%;
  position: absolute;
  left: 30px;

  color: ${props => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    width: 60%;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;

  height: 24px;
  width: 24px;
  width: 100%;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
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

export const InputRadio = ({ control, name, label, value }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <InputBox>
          <Input
            id={label}
            type="radio"
            {...field}
            value={value}
            checked={field.value === value}
          />
          <Label active={field.value === value}>{label}</Label>
          <IconBox active={field.value === value}>
            <IconDot active={field.value === value} />
          </IconBox>
        </InputBox>
      )}
    />
  );
};
