import React, { useState, useEffect, useContext } from 'react';
import { favoritesData, nextData } from '../../services/dbApi';
import { useDispatch } from 'react-redux';
import { setTeachers } from 'store/slices/userSlice';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { TeacherListBox } from './FavoritesList.styled';
import { Button } from 'components/common/Button';
import { Flex } from 'components/common/Flex';
import { Section } from 'components/common/Section/Section';
import { theme } from 'assets/styles';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';

const FavoritesList = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [dataFav, setDataFav] = useState([]);
  const [loading, setLoading] = useState(false);

  // const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (user) {
        favoritesData('email', user.email)
          .then(data => {
            setDataFav(data);
          })
          .catch(error => {
            console.error(error);
          });
      }
      setLoading(false);
      console.log('data', dataFav);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className="teacher-list" bg={theme.colors.background}>
      <TeacherListBox>
        {dataFav && <TeacherCard teachers={dataFav} />}
      </TeacherListBox>
    </Section>
  );
};

export default FavoritesList;
