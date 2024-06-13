import { theme } from 'assets/styles';
import { styled } from 'styled-components';

const Item = styled.li`
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 8px 12px;
  height: 32px;
  width: auto;
  height: auto;
  white-space: nowrap;
`;

const Level = ({ item, selectedLevel }) => {
  return (
    <Item
      levels="true"
      style={{
        background:
          selectedLevel === item ? theme.colors.primary : 'transparent',
        border:
          selectedLevel === item ? 'none' : '1px solid rgba(18, 20, 23, 0.2)',
      }}
    >{`#${item}`}</Item>
  );
};
export default Level;
