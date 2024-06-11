import React, { useState, useEffect, useContext } from 'react';
import { favoritesData } from '../../services/dbApi';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { TeacherListBox } from './FavoritesList.styled';
import { Section } from 'components/common/Section/Section';
import { theme } from 'assets/styles';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';

const FavoritesList = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const [dataFav, setDataFav] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const data = await favoritesData('email', user.email);
        setDataFav(data);
      }
    };
    fetchData();
  }, [user]);

  return (
    <Section className="teacher-list" bg={theme.colors.background}>
      <TeacherListBox>
        {dataFav &&
          dataFav.map((teacher, index) => (
            <TeacherCard teacher={teacher} key={index} />
          ))}
      </TeacherListBox>
    </Section>
  );
};

export default FavoritesList;
