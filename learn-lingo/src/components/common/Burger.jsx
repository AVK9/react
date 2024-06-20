import styled from 'styled-components';

const Span = styled.span`
  background-color: #121417;
  height: 3px;
  width: 20px;
  top: 8.5px;
  position: absolute;
  transition: background-color 0.3s, transform 0.6s ease;
`;

const Div = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  cursor: pointer;

  &:hover ${Span} {
    background-color: var(--primary-activ);
    transform: scale(1.5);
    transform: rotate(-180deg);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 20px;
    background-color: #121417;
    height: 3px;
    transition: background-color 0.3s, transform 0.6s ease;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 20px;
    background-color: #121417;
    height: 3px;
    transition: background-color 0.3s, transform 0.6s ease;
  }

  &:hover::before,
  &:hover::after {
    background-color: var(--primary);
    transform: scale(1.1);
  }
`;

const Burger = () => {
  return (
    <Div>
      <Span />
    </Div>
  );
};

export default Burger;
