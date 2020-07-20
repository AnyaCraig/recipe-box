import { InputWrapper, ErrorMessage } from './styled';

import React from 'react';
import { useField } from 'formik';

interface TextFieldProps {
  name: string;
  id: string;
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, id, label }) => {
  const [fieldProps, meta] = useField(name);
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <input type="text" {...fieldProps} id={id} />
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </InputWrapper>
  );
};
