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

export const Form = ({ isRegistration }) => {
  const [showPass, setShowPass] = useState(false);

  const isShowPass = () => setShowPass(prev => !prev);

  const schema = yup.object().shape({
    Name: yup.string().min(3).max(30),
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
    const { Email: email, Password: password, Name: name } = data;
    if (isRegistration) {
      console.log('Register:', email);
      console.log('Register:', password);
      handleRegister(email, password);
    } else {
      console.log('Login:', data);
      handleLogin(email, password);
    }
  };

  return (
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
          <IconSvg stroke="#121417" icon={showPass ? 'eye' : 'eye-slash'} />
        </IconBox>
        {errors.Password && (
          <InfoInput role="alert">{errors.Password.message}</InfoInput>
        )}
      </InputBox>
      <Button>{isRegistration ? 'Sign Up' : 'Log In'}</Button>
      <LoginWithGoogle />
    </form>
  );
};
