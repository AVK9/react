import React, { useState, useEffect } from 'react';
import { firstData, nextData } from '../../services/dbApi';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { TeacherListBox } from './TeacherList.styled';
import { Button } from 'components/common/Button';
import { Flex } from 'components/common/Flex';
import { Section } from 'components/common/Section/Section';
import { theme } from 'assets/styles';

export const TeacherList = ({
  filter,
  selectedLanguage,
  selectedLevel,
  selectedPrice,
}) => {
  const [data, setData] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await firstData();
      setData(initialData);
    };
    fetchData();
  }, []);

  const handleLoadMore = async () => {
    const nextPageData = await nextData();
    setData(prevData => [...prevData, ...nextPageData]);
    if (nextPageData.length < 4 && !nextPageData.length) {
      setIsLoadMore(false);
    }
  };
  let asd = true;
  if (selectedPrice || selectedLanguage || selectedLevel) {
    console.log('filterFIN', filter);
    asd = false;
  }

  return (
    <Section className="teacher-list" bg={theme.colors.background}>
      <TeacherListBox>
        {selectedPrice || selectedLanguage || selectedLevel
          ? filter?.map((teacher, index) => (
              <TeacherCard teacher={teacher} key={index} />
            ))
          : data?.map((teacher, index) => (
              <TeacherCard teacher={teacher} key={index} />
            ))}
        {asd && isLoadMore && (
          <Flex justify="center">
            <Button onClick={handleLoadMore} width="183px" margin="11px">
              Load More
            </Button>
          </Flex>
        )}
      </TeacherListBox>
    </Section>
  );
};
