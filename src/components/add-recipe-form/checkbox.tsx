import { CheckboxInputWrapper, ErrorMessage } from './styled';

import React from 'react';
import { useField } from 'formik';

interface CheckboxProps {
  name: string;
  id: string;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, id, label }) => {
  const [fieldProps, meta] = useField(name);

  return (
    <CheckboxInputWrapper>
      <input type="checkbox" checked={fieldProps.value} id={id} {...fieldProps} />
      <label htmlFor={id}>{label}</label>
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </CheckboxInputWrapper>
  );
};
