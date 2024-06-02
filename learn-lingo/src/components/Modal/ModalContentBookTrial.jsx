import React from 'react';
import { Title } from 'components/common/Title';
import { NameTeacher, P, TeacherPhoto, YourTeacher } from './Modal.styled';
import { Flex } from 'components/common/Flex';
import { FormBookTrial } from 'components/Form/FormBookTrial';

export const ModalContentBookTrial = ({ itemBook, closeModal }) => {
  return (
    <>
      <Title>Book trial lesson</Title>
      <P>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </P>
      <Flex gap="14px">
        <TeacherPhoto
          src={itemBook.avatar_url}
          alt={`avatar ${itemBook.name}`}
        />
        <Flex direction="column" gap="4px">
          <YourTeacher>Your teacher</YourTeacher>
          <NameTeacher>
            {itemBook.name} {itemBook.surname}
          </NameTeacher>
        </Flex>
      </Flex>
      <Title h2={true} mt="40px" mb="20px">
        What is your main reason for learning English?
      </Title>
      <FormBookTrial closeModal={closeModal} />
    </>
  );
};
