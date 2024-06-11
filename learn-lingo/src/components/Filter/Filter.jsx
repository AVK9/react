import { theme } from 'assets/styles';
import { Section } from 'components/common/Section/Section';
import SelectFields from 'components/common/SelectFields';
import { languages, level, price } from 'utils/const';
import { FilterBox } from './Filter.styled';

const Filter = () => {
  const unit = '$ ';

  return (
    <Section className="filter" bg={theme.colors.background}>
      {/* <Flex p="32px 0px 0px 0px" h="112px" gap="20px">
        <SelectField data={languages} />
        <SelectField data={level} />
        <SelectField data={price} />
      </Flex> */}
      <FilterBox>
        <SelectFields data={languages} />
        <SelectFields data={level} />
        <SelectFields data={price} unit={unit} />
      </FilterBox>
    </Section>
  );
};

export default Filter;
