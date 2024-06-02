import { useForm } from 'react-hook-form';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../common/Button';
import { IconBox, InfoInput, InputBox } from './Form.styled';
import { InputField } from 'components/common/InputField';
import { IconSvg } from 'components/common/IconSvg';
import { useState } from 'react';
import { handleLogin, handleRegister } from 'services/authApi';
import { LoginWithGoogle } from 'components/common/LoginWithGoogle';

export const FormBookTrial = ({ isRegistration }) => {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(30),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <InputField
          {...register('Full Name', { required: 'Name is required' })}
          aria-invalid={errors.name ? 'true' : 'false'}
          control={control}
          tooltipText="Please enter your name (minimum 3 characters)."
        />
        {errors.name?.type === 'required' && (
          <p role="alert">Full Name is required</p>
        )}
      </InputBox>

      <InputBox>
        <InputField
          {...register('Email', {
            required: 'Email Address is required',
          })}
          aria-invalid={errors.Email ? 'true' : 'false'}
          control={control}
          tooltipText="Please enter your valid email."
        />
        {errors.Email && (
          <InfoInput role="alert">{errors.Email.message}</InfoInput>
        )}
      </InputBox>
      <InputBox>
        <InputField
          {...register('Phone number', {
            required: 'Phone number is required',
          })}
          aria-invalid={errors.phone ? 'true' : 'false'}
          type="phone"
          control={control}
          tooltipText="Please enter your phone number"
        />
        {errors.phone && (
          <InfoInput role="alert">{errors.phone.message}</InfoInput>
        )}
      </InputBox>
      <Button>Book</Button>
    </form>
  );
};
