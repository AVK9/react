import { theme } from 'assets/styles';
import { Section } from 'components/common/Section/Section';
import { TeacherList } from 'components/TeacherList/TeacherList';
import { FilterBox } from './TeachersPage.styled';
import SelectFields from 'components/common/SelectFields';
import { languages, level, price } from 'utils/const';
import { filterRecords } from 'services/dbApi';
import { useEffect, useMemo, useState } from 'react';

const TeachersPage = () => {
  const unit = '$ ';

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [allTeachers, setAllTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const allTeachers = await filterRecords({});
      setAllTeachers(allTeachers);
    };
    fetchTeachers();
  }, [selectedLanguage, selectedLevel, selectedPrice]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'languages') {
      setSelectedLanguage(value);
    } else if (name === 'levels') {
      setSelectedLevel(value);
    } else if (name === 'price_per_hour') {
      setSelectedPrice(value);
    }
  };

  const filteredTeachers = useMemo(() => {
    return allTeachers.filter(teacher => {
      console.log('selectedLanguage', selectedLanguage);
      console.log('selectedLevel', selectedLevel);
      console.log('selectedPrice', selectedPrice);
      return (
        (selectedLanguage
          ? teacher.languages.includes(selectedLanguage)
          : true) &&
        (selectedLevel ? teacher.levels.includes(selectedLevel) : true) &&
        (selectedPrice
          ? teacher.price_per_hour === parseFloat(selectedPrice)
          : true)
      );
    });
  }, [selectedLanguage, selectedLevel, selectedPrice, allTeachers]);

  return (
    <>
      <Section className="filter" bg={theme.colors.background}>
        <form>
          <FilterBox>
            <SelectFields
              holder="Language"
              name="languages"
              data={languages}
              onChange={handleChange}
            />
            <SelectFields
              holder="Level"
              name="levels"
              data={level}
              onChange={handleChange}
            />
            <SelectFields
              holder=" / h"
              name="price_per_hour"
              data={price}
              unit={unit}
              onChange={handleChange}
            />
          </FilterBox>
        </form>
      </Section>
      <TeacherList
        filter={filteredTeachers}
        selectedPrice={selectedPrice}
        selectedLevel={selectedLevel}
        selectedLanguage={selectedLanguage}
      />
    </>
  );
};

export default TeachersPage;
