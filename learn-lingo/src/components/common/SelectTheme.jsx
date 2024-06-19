import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;

  border-radius: 50%;

  width: 28px;
  height: 28px;
  background: #fff;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  white-space: nowrap;
  line-height: 111%;
  color: #121417;
  cursor: pointer;
  border: 1px solid var(--primary);
  background-color: var(--primary);

  &:hover {
    border: 1px solid var(--primary-activ);
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
  width: 130px;

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
  display: flex;
  gap: 10px;
  align-items: center;

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

const TooltipText = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: #fff4d6;
  color: #1f1f1f;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 0px; /* Положение сверху по умолчанию */
  left: 95px;
  margin-left: -60px; /* Отрицательный половинный ширины */

  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #fff4d6;
    bottom: 8px;
    left: -5px;
  }
`;
const SelectedItemBox = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;

  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ col }) => col};
`;

const SelectTheme = ({ data, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(data[0].value);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = value => {
    setSelected(value);
    setIsOpen(false);
    onChange({ target: { name, value } });
  };

  return (
    <SelectWrapper ref={wrapperRef}>
      <SelectedItemBox>
        <SelectedItem onClick={toggleDropdown} name={name} />
        <TooltipText>Theme</TooltipText>
      </SelectedItemBox>
      {isOpen && (
        <OptionsList>
          {data.map((item, index) => (
            <OptionItem
              value={item}
              key={index}
              onClick={() => handleSelect(item.value)}
            >
              <Color col={item.color} />
              {item.value}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
};

export default SelectTheme;
