import styled from 'styled-components';

const TextInput = styled.input`
  width: 100%;
  border: 1px solid #000;
  border-radius: 10px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 10px;
  background-color: #fff;
  
  &::placeholder {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Helvetica', sans-serif;
  }
`;

export default TextInput;
