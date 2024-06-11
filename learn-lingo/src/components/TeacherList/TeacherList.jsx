import React, { useState, useEffect, useContext } from 'react';
import { favoritesData, firstData, nextData } from '../../services/dbApi';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { TeacherListBox } from './TeacherList.styled';
import { Button } from 'components/common/Button';
import { Flex } from 'components/common/Flex';
import { Section } from 'components/common/Section/Section';
import { theme } from 'assets/styles';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';

export const TeacherList = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [data, setData] = useState([]);
  const [dataFavorite, setDataFavorite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const initialData = await firstData();
      setData(initialData);
      setLoading(false);
      console.log('data', data);
    };

    if (user) {
      favoritesData('email', user.email)
        .then(data => {
          setDataFavorite(data);
          localStorage.setItem('userFavorites', JSON.stringify(data));
        })
        .catch(error => {
          console.error(error);
        });
    }

    fetchData();
  }, []);

  console.log('dataFavorite', dataFavorite);

  const handleLoadMore = async () => {
    setLoading(true);
    const nextPageData = await nextData();
    setData(prevData => [...prevData, ...nextPageData]);
    setLoading(false);

    if (nextPageData.length < 4 && !nextPageData.length) {
      setIsLoadMore(false);
    }
    console.log('nextPageData', nextPageData.length);
    console.log('isLoadMore', isLoadMore);
  };

  return (
    <Section className="teacher-list" bg={theme.colors.background}>
      <TeacherListBox>
        {/* {data && <TeacherCard teachers={data} dataFavorite={dataFavorite} />} */}
        {data &&
          data.map((teacher, index) => (
            <TeacherCard
              teacher={teacher}
              dataFavorite={dataFavorite}
              key={index}
            />
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
