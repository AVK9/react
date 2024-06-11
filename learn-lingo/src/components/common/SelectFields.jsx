import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IconSvg } from './IconSvg';

const SelectWrapper = styled.div`
  position: relative;
  width: ${props => props.width || '90%'};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;

  border-radius: 14px;
  padding: 0px 18px 0px 18px;
  /* width: auto; */
  height: 48px;
  background: #fff;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  white-space: nowrap;
  line-height: 111%;
  color: #121417;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:focus {
    border-color: #007bff;
    background-color: #fff;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primaryActiv};
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
  margin-left: 14px;
  position: absolute;
  bottom: 14px;
  right: 14px;

  display: flex;
  gap: 10px;
`;

const SelectFields = ({ data, width, unit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(data[0].value);
  const [isClear, setIsClear] = useState(false);
  //-----------
  const wrapperRef = useRef(null);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = event => {
    if (
      event.key === 'Escape' ||
      event.key === ' ' ||
      event.key === 'Spacebar'
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  //-------------

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = data => {
    setSelected(data);
    setIsOpen(false);
    setIsClear(true);
  };

  const clearField = () => {
    setSelected(data[0].value);
    setIsClear(false);
  };

  return (
    <SelectWrapper width={width} ref={wrapperRef}>
      <Label htmlFor={data[0].label}>{data[0].label}</Label>
      <SelectedItemBox>
        <SelectedItem onClick={toggleDropdown}>
          {unit}
          {selected}
        </SelectedItem>
        <IconSvgBox>
          {isClear && (
            <IconSvg
              icon="close"
              stroke="black"
              size="20px"
              onClick={clearField}
            />
          )}

          <IconSvg
            onClick={toggleDropdown}
            icon="down"
            stroke="black"
            size="20px"
          />
        </IconSvgBox>
      </SelectedItemBox>
      {isOpen && (
        <OptionsList>
          {data.slice(1).map((item, index) => (
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
