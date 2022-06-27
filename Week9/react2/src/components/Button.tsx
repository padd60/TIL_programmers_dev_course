import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  background-color: black;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #111;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }
`;

export default Button;
