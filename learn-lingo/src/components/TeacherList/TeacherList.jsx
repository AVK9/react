import React, { useState, useEffect } from 'react';
import { nextData } from '../../services/dbApi';
import { useDispatch, useSelector } from 'react-redux';
import { setTeachers } from 'store/slices/userSlice';
import { selectStateTeachers } from 'store/usersSelector ';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { TeacherListBox } from './TeacherList.styled';
import { Button } from 'components/common/Button';
import { Flex } from 'components/common/Flex';

export const TeacherList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const initialData = await nextData();
      setData(initialData);
      setLoading(false);
      console.log('data', data);
    };

    fetchData();
  }, []);

  const teachers = useSelector(selectStateTeachers);

  const handleLoadMore = async () => {
    setLoading(true);
    const nextPageData = await nextData();
    setData(prevData => [...prevData, ...nextPageData]);
    setLoading(false);
    console.log('data', data);
  };

  useEffect(() => {
    dispatch(setTeachers(data));
  }, [dispatch, data]);
  return (
    <div>
      <TeacherListBox>
        <TeacherCard teachers={teachers} />
      </TeacherListBox>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Flex justify="center">
          <Button onClick={handleLoadMore} width="183px" margin="11px">
            Load More
          </Button>
        </Flex>
      )}
    </div>
  );
};
