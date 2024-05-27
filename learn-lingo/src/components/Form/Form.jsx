import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../common/Button';
import { FormBox, IconBox, InfoInput, InputBox } from './Form.styled';
import { InputField } from 'components/common/InputField';
import { IconSvg } from 'components/common/IconSvg';
import { useState } from 'react';

export const Form = ({ isRegistration }) => {
  const [showPass, setShowPass] = useState(false);

  const isShowPass = () => setShowPass(prev => !prev);

  const schema = yup.object().shape({
    Name: yup.string().min(3).max(30).required(),
    Email: yup.string().email().required(),
    Password: yup.string().min(5).max(16).required(),
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
    if (isRegistration) {
      console.log('Register:', data);
    } else {
      console.log('Login:', data);
    }
  };

  return (
    <FormBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isRegistration && (
          <InputBox>
            <InputField
              {...register('Name', { required: 'Name is required' })}
              aria-invalid={errors.Name ? 'true' : 'false'}
              control={control}
              tooltipText="Please enter your name (minimum 3 characters)."
            />
            {errors.Name?.type === 'required' && (
              <p role="alert">First name is required</p>
            )}
          </InputBox>
        )}
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
            {...register('Password', {
              required: 'Password Address is required',
            })}
            aria-invalid={errors.Password ? 'true' : 'false'}
            type={showPass ? 'text' : 'password'}
            control={control}
            tooltipText="Please enter your password (min 3 max 16 characters)"
          />
          <IconBox onClick={isShowPass}>
            <IconSvg icon={showPass ? 'eye' : 'eye-slash'} />
          </IconBox>
          {errors.Password && (
            <InfoInput role="alert">{errors.Password.message}</InfoInput>
          )}
        </InputBox>
        <Button>{isRegistration ? 'Sign Up' : 'Log In'}</Button>
      </form>
    </FormBox>
  );
};
