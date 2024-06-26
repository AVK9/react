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
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { TEACHERS_ROUTE } from 'utils/const';

export const Form = ({ isRegistration }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const isShowPass = () => setShowPass(prev => !prev);

  const schema = yup.object().shape({
    name: yup.string().min(3).max(30),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(16).required(),
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
    const { email, password, name } = data;
    if (isRegistration) {
      toast.success(`${name} congretilation you register success`);
      navigate({ TEACHERS_ROUTE });

      handleRegister(email, password, name);
    } else {
      handleLogin(email, password);
      navigate({ TEACHERS_ROUTE });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isRegistration && (
        <InputBox>
          <InputField
            {...register('name', { required: 'Name is required' })}
            aria-invalid={errors.name ? 'true' : 'false'}
            control={control}
            placeholder="Name"
            tooltipText="Please enter your name (minimum 3 characters)."
          />
          {errors.name?.type === 'required' && (
            <p role="alert">Name is required</p>
          )}
        </InputBox>
      )}
      <InputBox>
        <InputField
          {...register('email', {
            required: 'Email Address is required',
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
          control={control}
          placeholder="Email"
          tooltipText="Please enter your valid email."
        />
        {errors.email && (
          <InfoInput role="alert">{errors.email.message}</InfoInput>
        )}
      </InputBox>
      <InputBox>
        <InputField
          {...register('password', {
            required: 'Password is required',
          })}
          aria-invalid={errors.Password ? 'true' : 'false'}
          type={showPass ? 'text' : 'password'}
          control={control}
          placeholder="Password"
          tooltipText="Please enter your password (min 3 max 16 characters)"
        />
        <IconBox onClick={isShowPass}>
          <IconSvg stroke="#121417" icon={showPass ? 'eye' : 'eye-slash'} />
        </IconBox>
        {errors.password && (
          <InfoInput role="alert">{errors.password.message}</InfoInput>
        )}
      </InputBox>
      <Button>{isRegistration ? 'Sign Up' : 'Log In'}</Button>
      <LoginWithGoogle />
    </form>
  );
};
