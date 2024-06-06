import { theme } from 'assets/styles';
import { Flex } from 'components/common/Flex';
import { Section } from 'components/common/Section/Section';
import SelectField from 'components/common/SelectField';

const Filter = () => {
  return (
    <Section className="filter" bg={theme.colors.background}>
      <Flex p="32px 0px 0px 0px" h="74px" gap="20px">
        <SelectField />
        <SelectField />
        <SelectField />
      </Flex>
    </Section>
  );
};

export default Filter;
