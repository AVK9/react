import { theme } from 'assets/styles';
import { Flex } from 'components/common/Flex';
import { Section } from 'components/common/Section/Section';
import SelectField from 'components/common/SelectField';
import SelectFields from 'components/common/SelectFields';
import { languages, level, price } from 'utils/const';
import { FilterBox } from './Filter.styled';

const Filter = () => {
  return (
    <Section className="filter" bg={theme.colors.background}>
      {/* <Flex p="32px 0px 0px 0px" h="112px" gap="20px">
        <SelectField data={languages} />
        <SelectField data={level} />
        <SelectField data={price} />
      </Flex> */}
      <FilterBox>
        <SelectFields data={languages} width="221px" />
        <SelectFields data={level} />
        <SelectFields data={price} width="124px" />
      </FilterBox>
    </Section>
  );
};

export default Filter;
