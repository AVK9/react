import React from 'react';
import { Form } from 'components/Form/Form';
import { Title } from 'components/common/Title';

export const ModalContent = ({ isReg }) => {
  return (
    <div>
      {isReg && (
        <>
          <Title>Registration</Title>
          <p>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
          <Form isRegistration={true} />
        </>
      )}
      {!isReg && (
        <>
          <Title>Log In</Title>
          <p>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
          <Form isRegistration={false} />
        </>
      )}
    </div>
  );
};
