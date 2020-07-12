import styled from 'styled-components';

export const ErrorMessage = styled.p`
  color: red;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
`;

export const CheckboxInputWrapper = styled(InputWrapper)`
  display: flex;
  flex-direction: row;
`;

export const StyledForm = styled.form`
  max-width: 900px;
`;
