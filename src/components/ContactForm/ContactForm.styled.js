import { Field,Form } from 'formik';
import styled from 'styled-components';

// export const FormWrapper = styled.div`
// text-align: center;
// `;

export const FormWrapper = styled(Form)`
text-align: center;
padding: 10px;
`;

export const InputContainer = styled.div`
margin-bottom: 10px;
`;

// export const Label = styled.label`
// font-size: 18px;
// font-weight: 500;
// `;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid #fff;
  border-radius: 10px;
  outline: none;
  :focus {
    border-color: #4287f5;
  }
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;


export const Button = styled.button`
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: #111;
    border-color: #111;
  }
`;
