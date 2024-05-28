import React from 'react';
import { Form } from 'components/Form/Form';
import { Title } from 'components/common/Title';
import { P } from './Modal.styled';

export const ModalContent = ({ isReg }) => {
  return (
    <div>
      {isReg && (
        <>
          <Title>Registration</Title>
          <P>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </P>
          <Form isRegistration={true} />
        </>
      )}
      {!isReg && (
        <>
          <Title>Log In</Title>
          <P>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </P>
          <Form isRegistration={false} />
        </>
      )}
    </div>
  );
};
