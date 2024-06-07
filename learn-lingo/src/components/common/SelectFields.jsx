import React, { useState } from 'react';
import styled from 'styled-components';
import { IconSvg } from './IconSvg';

const SelectWrapper = styled.div`
  position: relative;
  width: ${props => props.width || '100%'};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;

  border-radius: 14px;
  padding: 0px 18px 0px 18px;
  width: auto;
  height: 48px;
  background: #fff;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
  }

  &:hover {
    border-color: #007bff;
  }
`;

const OptionsList = styled.ul`
  padding: 18px;
  border-radius: 22px;
  overflow-y: auto;
  z-index: 10;
  position: absolute;
  top: 85px;

  list-style: none;
  background-color: #fff;
  width: 100%;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: rgba(18, 20, 23, 0.2);

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OptionItem = styled.li`
  font-family: var(--font-family);
  white-space: nowrap;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: rgba(18, 20, 23, 0.2);

  cursor: pointer;
  &:hover {
    /* background-color: #007bff; */
    color: #121417;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.label`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;
const SelectedItemBox = styled.div`
  position: relative;
  cursor: pointer;
`;
const IconSvgBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const SelectFields = ({ data, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(data[0].value);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = data => {
    setSelected(data);
    setIsOpen(false);
  };

  return (
    <SelectWrapper width={width}>
      <Label htmlFor={data[0].label}>{data[0].label}</Label>
      <SelectedItemBox>
        <SelectedItem onClick={toggleDropdown}>{selected}</SelectedItem>
        <IconSvgBox onClick={toggleDropdown}>
          <IconSvg icon="down" stroke="black" />
        </IconSvgBox>
      </SelectedItemBox>
      {isOpen && (
        <OptionsList>
          {data.map((item, index) => (
            <OptionItem key={index} onClick={() => handleSelect(item.value)}>
              {item.value}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
};

export default SelectFields;
