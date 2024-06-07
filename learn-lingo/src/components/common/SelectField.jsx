import { styled } from 'styled-components';
import { Flex } from './Flex';

const Select = styled.select`
  border-radius: 14px;
  padding-left: 18px;
  width: auto;
  height: 48px;
  background: #fff;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
  }
`;

const Label = styled.label`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;

const Optim = styled.option`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: rgba(18, 20, 23, 0.2);

  margin-top: 10px;
  border-radius: 22px;
  /* width: 221px;
  height: 160px; */
  padding: 10px;
  border: 1px solid #ff0000;
  margin: 5px 0;

  &:focus {
    color: #121417;
  }
`;

const SelectField = ({ data }) => {
  return (
    <>
      <Flex direction="column" gap="8px">
        <Label htmlFor={data[0].label}>{data[0].label}</Label>
        <Select name={data[0].label} id={data[0].label}>
          {data.map((item, index) => (
            <Optim key={index} value={item.value}>
              {item.value}
            </Optim>
          ))}
        </Select>
      </Flex>
    </>
  );
};

export default SelectField;
