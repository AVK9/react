import { theme } from 'assets/styles';
import { Section } from 'components/common/Section/Section';
import SelectFields from 'components/common/SelectFields';
import { languages, level, price } from 'utils/const';
import { FilterBox } from './Filter.styled';
import { useState } from 'react';
import { filterRecordLanguages } from 'services/dbApi';

const Filter = () => {
  const unit = '$ ';

  // const [selectedLanguage, setSelectedLanguage] = useState('');
  // const [selectedLevel, setSelectedLevel] = useState('');
  // const [selectedPrice, setSelectedPrice] = useState('');

  // const handleSubmit = () => {

  // };

  const handleChange = async e => {
    const { name, value } = e.target;
    if (name === 'languages') {
      // setSelectedLanguage(value);
      console.log('Selected Language:', value);

      const filter = await filterRecordLanguages(name, value);
      console.log('Selected filter:', filter);
    } else if (name === 'levels') {
      console.log('Selected Level:', value);
      // setSelectedLevel(value);
      filterRecordLanguages(name, value);
    } else if (name === 'price_per_hour') {
      console.log('Selected Price:', value);
      filterRecordLanguages(name, value);
      // setSelectedPrice(value);
    }

    // handleSubmit();
  };
  return (
    <Section className="filter" bg={theme.colors.background}>
      <form>
        <FilterBox>
          <SelectFields
            name="languages"
            data={languages}
            onChange={handleChange}
          />
          <SelectFields name="levels" data={level} onChange={handleChange} />
          <SelectFields
            name="price_per_hour"
            data={price}
            unit={unit}
            onChange={handleChange}
          />
        </FilterBox>
      </form>
    </Section>
  );
};

export default Filter;
