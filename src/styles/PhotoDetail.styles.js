import styled from 'styled-components';

export const WrapperDetail = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 20px auto;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    transition: transform 0.3s ease;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-left: 1px solid #e0e0e0;
  border-radius: 0 15px 15px 0;

  h1 {
    margin-top: 0;
    font-size: 2.5em;
    color: #333;
    font-family: 'Montserrat', sans-serif;
  }

  h2 {
    font-size: 1.5em;
    color: #555;
    margin: 10px 0;
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-size: 1.1em;
    color: #666;
    margin: 5px 0;
    line-height: 1.6;
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: 768px) {
    padding: 20px;

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.2em;
    }

    p {
      font-size: 1em;
    }
  }
`;

export const BackIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;
