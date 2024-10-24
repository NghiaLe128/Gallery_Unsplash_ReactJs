import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex; // For list view
  flex-direction: column; // Align items vertically

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

// For List View, you can also add styles for the Img
export const Img = styled.img`
  width: 100%;
  height: auto; // Allow for height adjustment in list view
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;


// Author name overlay at the bottom of the image
export const AuthorName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5em;
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 0.05em;
  transition: background 0.3s ease;

  ${ImageWrapper}:hover & {
    background: rgba(0, 0, 0, 0.8);
  }
`;
