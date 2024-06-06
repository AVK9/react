import { Section } from 'components/common/Section/Section';
import { TeacherList } from 'components/TeacherList/TeacherList';
import React from 'react';

const FavoritesPage = () => {
  return (
    <Section>
      <TeacherList />
    </Section>
  );
};

export default FavoritesPage;
