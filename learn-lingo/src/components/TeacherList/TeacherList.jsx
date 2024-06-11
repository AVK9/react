import React, { useState, useEffect } from 'react';
import { firstData, nextData } from '../../services/dbApi';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { TeacherListBox } from './TeacherList.styled';
import { Button } from 'components/common/Button';
import { Flex } from 'components/common/Flex';
import { Section } from 'components/common/Section/Section';
import { theme } from 'assets/styles';

export const TeacherList = () => {
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

  return (
    <Section className="teacher-list" bg={theme.colors.background}>
      <TeacherListBox>
        {data &&
          data.map((teacher, index) => (
            <TeacherCard teacher={teacher} key={index} />
          ))}
      </TeacherListBox>
      {isLoadMore && (
        <Flex justify="center">
          <Button onClick={handleLoadMore} width="183px" margin="11px">
            Load More
          </Button>
        </Flex>
      )}
    </Section>
  );
};
