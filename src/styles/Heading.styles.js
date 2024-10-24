import styled from 'styled-components';

export const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 0.5em;
  font-size: 2.5em;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.1em;
  color: #666;
  margin-bottom: 1.5em;
`;

export const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  margin-top: 1em;
  outline: none;
  text-indent: 1em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;

  ::placeholder {
    font-size: 0.8em;
    color: #aaa;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  padding: 0 1em;
  outline: none;
  cursor: pointer;
  background: #007bff;
  border: none;
  color: #fff;
  font-size: 1em;
  border-radius: 5px;
  margin-left: 0.5em;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

export const ViewButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: #007bff;
  margin: 0 0.5em;
  transition: color 0.3s ease;
  display: flex;
  align-items: right;

  &:hover {
    color: #0056b3;
  }

  &.active {
    color: #0056b3;
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: right;
`;
