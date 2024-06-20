import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InfoInput, InputBox } from './Form.styled';
import { InputField } from 'components/common/InputField';
import { InputRadio } from 'components/common/InputRadio';
import { Flex } from 'components/common/Flex';
import { Button } from 'components/common/Button';

export const FormBookTrial = ({ closeModal }) => {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(30),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    survey: yup.string().required(),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      survey: 'Career and business',
    },
  });
  const onSubmit = data => {
    console.log('data', data);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="17px" m="40px 0px 40px 0px">
        <InputRadio
          {...register('survey')}
          control={control}
          name="survey"
          label="Career and business"
          value="Career and business"
        />
        <InputRadio
          {...register('survey')}
          control={control}
          name="survey"
          label="Lesson for kids"
          value="Lesson for kids"
        />
        <InputRadio
          {...register('survey')}
          control={control}
          name="survey"
          label="Living abroad"
          value="Living abroad"
        />
        <InputRadio
          {...register('survey')}
          control={control}
          name="survey"
          label="Exams and coursework"
          value="Exams and coursework"
        />
        <InputRadio
          {...register('survey')}
          control={control}
          name="survey"
          label="Culture, travel or hobby"
          value="Culture, travel or hobby"
        />
      </Flex>

      <InputBox>
        <InputField
          {...register('name', { required: 'Name is required' })}
          name="name"
          placeholder="Full Name"
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
          {...register('email', {
            required: 'Email Address is required',
          })}
          placeholder="Email"
          name="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          control={control}
          tooltipText="Please enter your valid email."
        />
        {errors.email && (
          <InfoInput role="alert">{errors.email.message}</InfoInput>
        )}
      </InputBox>
      <InputBox>
        <InputField
          {...register('phone', {
            required: 'Phone number is required',
          })}
          aria-invalid={errors.phone ? 'true' : 'false'}
          placeholder="Phone number"
          type="phone"
          name="phone"
          control={control}
          tooltipText="Please enter your phone number"
        />
        {errors.phone && (
          <InfoInput role="alert">{errors.phone.message}</InfoInput>
        )}
      </InputBox>

      <Button type="submit">Book</Button>
    </form>
  );
};
