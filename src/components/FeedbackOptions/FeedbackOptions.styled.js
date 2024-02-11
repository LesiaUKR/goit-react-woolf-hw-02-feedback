import styled from 'styled-components';

export const ButtonsBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: lightgreen;
  border: 1px solid darkgreen;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px 30px;
  color: darkgreen;
  box-shadow: 0 0 5px teal;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: darkgreen;
    border: 1px solid lightgreen;
  }
  &:active {
    background-color: darkgreen;
  }
`;
