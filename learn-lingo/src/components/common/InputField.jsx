import { useState } from 'react';
import { Controller } from 'react-hook-form';

import { InfoInput, Input, InputBox } from '../Form/Form.styled';

export const InputField = ({
  name,
  control,
  tooltipText,
  type,
  register,
  errors,
  placeholder,
}) => {
  const regexPatterns = {
    name: /[а-яА-Яa-zA-Z]{3,}/,
    password: /^.{6,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone:
      /^\+?(\d{1,4})?[\s.-]?(\(?\d{1,4}\)?)[\s.-]?(\d{1,4})[\s.-]?(\d{1,9})[\s.-]?(\d{1,9})$/,
  };

  const currentRegex = regexPatterns[name] || /.*/;

  const [isFocused, setIsFocused] = useState(false);

  const [fieldValid, setFieldValid] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputBox>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            type={type}
            onFocus={handleFocus}
            onBlur={e => {
              field.onBlur(e);
              handleBlur();
            }}
            onChange={e => {
              field.onChange(e);
              currentRegex.test(e.target.value)
                ? setFieldValid(true)
                : setFieldValid(false);
            }}
            fieldValid={fieldValid}
          />
        )}
      />
      {isFocused && <InfoInput>{tooltipText}</InfoInput>}
    </InputBox>
  );
};
